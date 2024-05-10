const fs = require("fs").promises;
const path = require("path");
const markdownit = require("markdown-it");

function generateId() {
  return Math.random().toString().replace(".", "");
}

const md = markdownit();

async function loadProjects() {
  const projects = {};
  const rootDir = "./projects";
  // Reading all files in the directory
  const directories = await fs.readdir(rootDir);
  for (const projectDir of directories) {
    console.log("Building", projectDir);
    const id = generateId();
    projects[projectDir] = {
      id,
    };
    const projectDirPath = path.join(rootDir, projectDir);
    const files = await fs.readdir(projectDirPath);
    for (const file of files) {
      if (file.endsWith(".md")) {
        const filePath = path.join(projectDirPath, file);
        // Reading each file content
        const content = await fs.readFile(filePath, "utf8");

        // TODO: use an actual markdown parser here.
        const contentParts = content.split("\n");
        let insideFrontMatter = false;
        let contentStartInd;
        let ind = 0;
        for (const contentPart of contentParts) {
          if (contentPart === "---") {
            insideFrontMatter = !insideFrontMatter;
          } else if (insideFrontMatter) {
            const key = contentPart.split(":")[0].trim();
            const value = contentPart.split(":")[1].trim();
            projects[projectDir][key] = value;
          } else {
            contentStartInd = ind;
            break;
          }

          ind++;
        }

        projects[projectDir].posts = [
          {
            id,
            title: projects[projectDir].title,
            images: [],
            text: md.render(
              contentParts
                .slice(contentStartInd, contentParts.length)
                .join("\n"),
            ),
          },
        ];
      } else if (file.startsWith("header_image.")) {
        projects[projectDir].image = path.join(projectDirPath, file);
        projects[projectDir].headerUrl = path.join(projectDirPath, file);
      }
    }
    projects[projectDir].posts[0].images.push(projects[projectDir].headerUrl);
  }

  return projects;
}

async function build() {
  const projects = await loadProjects();

  const indexPage = await fs.readFile("./src/homepage_data.js", "utf8");

  await fs.writeFile(
    "./build/homepage_data.js",
    indexPage.replace(
      "process.env.PROJECTS",
      JSON.stringify(Object.values(projects)),
    ),
  );

  console.log("Build Complete!");
}

build();
