const fs = require("fs").promises;
const path = require("path");

function generateId() {
  return Math.random().toString().replace(".", "");
}

async function loadProjects() {
  const projects = {};
  const rootDir = "./projects";
  // Reading all files in the directory
  const directories = await fs.readdir(rootDir);

  for (const projectDir of directories) {
    projects[projectDir] = {
      id: generateId(),
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
            id: generateId(),
            title: projects[projectDir].title,
            images: [],
            text: contentParts
              .slice(contentStartInd, contentParts.length)
              .join("\n"),
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

/*

{
  id: generateId(),
  name: randomName,
  date: new Date().toISOString().split('T')[0], // current date in 'YYYY-MM-DD' format.
  client: randomClient,
  image: randomImage,
  posts: [
    {
      id: generateId(),
      title: `Post Title ${i + 1}`,
      images: [images[Math.floor(Math.random() * images.length)]],
      text: `This is blog post number ${i + 1}.`
    },
    {
      id: generateId(),
      title: `Post Title ${i + 2}`,
      images: [images[Math.floor(Math.random() * images.length)]],
      text: `This is blog post number ${i + 2}.`
    }
  ]
}

*/

async function build() {
  const projects = await loadProjects();

  const indexPage = await fs.readFile("./src/index.html", "utf8");

  await fs.writeFile(
    "./index.html",
    indexPage.replace(
      "process.env.PROJECTS",
      JSON.stringify(Object.values(projects)),
    ),
  );

  const aboutPage = await fs.readFile("./src/about.html", "utf8");
  await fs.writeFile("./about.html", aboutPage);

  console.log("Build Complete!");
}

build();
