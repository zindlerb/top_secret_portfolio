const fs = require("fs").promises;
const path = require("path");
const markdownit = require("markdown-it");

function generateId() {
  return Math.random().toString().replace(".", "");
}

const md = markdownit();
var defaultRender = md.renderer.rules.image
md.renderer.rules.image = function (tokens, idx, options, env, self) {
  const token = tokens[idx]
  var src = token.attrGet('src');
  token.attrSet('src', path.join(env.projectDirPath, src))

  // Pass the token to the default renderer.
  return defaultRender(tokens, idx, options, env, self);
}

async function loadProjects() {
  const projects = {};
  const rootDir = "./projects";
  // Reading all files in the directory
  const directories = await fs.readdir(rootDir);
  for (const projectDir of directories) {
    const id = generateId();

    const projectDirPath = path.join(rootDir, projectDir);
    let files
    try {
      files = await fs.readdir(projectDirPath);
    } catch (e) {
      console.log('Skipped', projectDir)
      continue
    }

    console.log("Building", projectDir);
    projects[projectDir] = {
      id,
      images: []
    }

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

        projects[projectDir].post = md.render(
          contentParts
            .slice(contentStartInd, contentParts.length)
            .join("\n"),
          {
            projectDirPath
          }
        )
      } else if (file.startsWith("header_image.")) {
        projects[projectDir].images.push(path.join(projectDirPath, file))
        projects[projectDir].headerUrl = path.join(projectDirPath, file)
        // TODO: should detect image types
      } else {
        projects[projectDir].images.push(path.join(projectDirPath, file))
      }
    }
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
