function generateId() {
  return Math.random().toString().replace(".", "");
}

function parseTranslateAndScaleFromElement(el) {
  // We get our value back in the format of:
  // matrix(scale, 0, 0, scale, translateX, translateY)
  // I don't really know linear algebra so I'm not sure why it maps that way. ¯\_(ツ)_/¯
  const transformString = getComputedStyle(el).transform;
  const [scale, _, __, ___, translateX, translateY] = transformString
    .replace("matrix(", "")
    .replace(")", "")
    .split(", ");
  return {
    scale: parseFloat(scale),
    translateX: parseFloat(translateX),
    translateY: parseFloat(translateY),
  };
}

function setTranslateAndScaleOnElement(el, scale, translateX, translateY) {
  el.style.setProperty(
    "transform",
    `matrix(${scale}, 0, 0, ${scale}, ${translateX}, ${translateY})`,
    "important",
  );
}

let projects = process.env.PROJECTS;

function dom(elementType, properties, innerHTML) {
  let element = document.createElement(elementType); // create a DOM element

  for (let propertyName in properties) {
    element[propertyName] = properties[propertyName];
  }

  element.innerHTML = innerHTML;

  return element;
}

let index = 0;
const timelineNode = document.querySelector(".container");
const sectionNode = document.querySelector("section");

for (let project of projects) {
  // Add images to timeline
  let transformCSS = `transform: rotate(var(--tilt)) skew(var(--tilt));`;
  let topCSS = `top: calc(${index} * var(--spacing));`;
  let leftCSS = `left: calc(-${index} * var(--spacing));`;

  const imgNode = dom("IMG", {
    id: `img-${project.id}`,
    src: project.headerUrl,
    style: `${transformCSS} ${topCSS} ${leftCSS}`,
  });
  timelineNode.append(imgNode);

  // Add posts
  console.log('project', project)
  const postNode = dom(
    "DIV",
    {},
    `
        <div class='post' id='post-${project.id}'>
          ${project.post}
        </div>
    `,
  );

  sectionNode.append(postNode);
  index++;
}

//// Setup Event Listeners
const timelineParentNode = document.querySelector(".main__timeline");

// Scroll to zoom
timelineParentNode.addEventListener("wheel", (event) => {
  const { scale, translateX, translateY } =
    parseTranslateAndScaleFromElement(timelineNode);
  setTranslateAndScaleOnElement(
    timelineNode,
    Math.min(Math.max(scale + 0.001 * event.deltaY, .1), 3),
    translateX,
    translateY,
  );
});

// Drag handlers
let grabbing = false;
let mouseDownPoint;
let originalTranslateProperties;
const defaultTimelineProperties = parseTranslateAndScaleFromElement(timelineNode);

timelineParentNode.addEventListener("mousedown", (event) => {
  if (!event.target.classList.contains("main__timeline")) return;

  document.body.style.setProperty("cursor", "grabbing", "important");
  document.body.style.setProperty("user-select", "none", "important");
  timelineParentNode.style.setProperty("cursor", "grabbing", "important");

  grabbing = true;
  mouseDownPoint = {
    x: event.clientX,
    y: event.clientY,
  };
  originalTranslateProperties = parseTranslateAndScaleFromElement(timelineNode);
});

timelineParentNode.addEventListener("mousemove", (event) => {
  if (grabbing) {
    const dx = event.clientX - mouseDownPoint.x;
    const dy = event.clientY - mouseDownPoint.y;
    const translateX = originalTranslateProperties.translateX + dx;
    const translateY = originalTranslateProperties.translateY + dy;

    setTranslateAndScaleOnElement(
      timelineNode,
      originalTranslateProperties.scale,
      translateX,
      translateY,
    );
  }
});

document.addEventListener("mouseup", (event) => {
  grabbing = false;
  document.body.style.removeProperty("cursor");
  document.body.style.removeProperty("user-select");
  timelineParentNode.style.removeProperty("cursor");
});

// Click to scroll to post
document.addEventListener("click", function (e) {
  const id = e.target.id;
  if (id.startsWith("img-")) {
    const rawIdNumber = id.replace("img-", "");
    console.log("rawIdNumber", rawIdNumber);
    document.getElementById(`post-${rawIdNumber}`).scrollIntoView();
  }
});

document.querySelector('.back-icon').addEventListener("click", function (e) {
  // prev image
})

document.querySelector('.next-icon').addEventListener("click", function (e) {
  // next image
})

document.querySelector('.center-icon').addEventListener("click", function (e) {
  const originalTranslateProperties = parseTranslateAndScaleFromElement(timelineNode);
  setTranslateAndScaleOnElement(
    timelineNode,
    defaultTimelineProperties.scale,
    defaultTimelineProperties.translateX,
    defaultTimelineProperties.translateY
  );
})
