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

let projects = [{"id":"05407453933581681","images":["projects/Beadwork/header_image.png"],"headerUrl":"projects/Beadwork/header_image.png","post":"<h1>Embroidery &amp; Beadwork Sample</h1>\n<p><img src=\"projects/Beadwork/header_image.png\" alt=\"header image\"></p>\n<p>Glass beads and mohair embroidery</p>\n"},{"id":"0772669375126604","images":["projects/Cloud Dream/backyard_model.jpeg","projects/Cloud Dream/header_image.png","projects/Cloud Dream/imp_in_the_garden.jpeg"],"headerUrl":"projects/Cloud Dream/header_image.png","post":"<h1>Cloud Dream</h1>\n<p><img src=\"projects/Cloud Dream/header_image.png\" alt=\"header image\">\nLounge wear - light as air</p>\n<p><img src=\"projects/Cloud Dream/backyard_model.jpeg\" alt=\"backyard model\">\n<img src=\"projects/Cloud Dream/imp_in_the_garden.jpeg\" alt=\"imp in garden\"></p>\n"},{"id":"02501006199260922","images":["projects/Fur Bunny/header_image.png"],"headerUrl":"projects/Fur Bunny/header_image.png","post":"<h1>Bunny</h1>\n<p><img src=\"projects/Fur Bunny/header_image.png\" alt=\"header image\"></p>\n<p>A mink fur coat transformed.</p>\n"},{"id":"04122434762607141","images":["projects/Green Blazer Upcycle/header_image.png"],"headerUrl":"projects/Green Blazer Upcycle/header_image.png","post":"<h1>Green Blazer Upcycle</h1>\n<p><img src=\"projects/Green Blazer Upcycle/header_image.png\" alt=\"header image\"></p>\n<p>Inspired by the Peter Do Open Back Blazer - thrifted and upcycled</p>\n"},{"id":"018674063973680477","images":["projects/Green Silk Suit/header_image.png"],"headerUrl":"projects/Green Silk Suit/header_image.png","post":"<h1>Green Suit</h1>\n<p><img src=\"projects/Green Silk Suit/header_image.png\" alt=\"header image\"></p>\n<p>Green Silk Two Piece</p>\n"},{"id":"09744671281377713","images":["projects/Kappi Green Silk Dress/dress_in_progress.jpeg","projects/Kappi Green Silk Dress/header_image.png"],"headerUrl":"projects/Kappi Green Silk Dress/header_image.png","post":"<h1>Green Silk</h1>\n<p><img src=\"projects/Kappi Green Silk Dress/header_image.png\" alt=\"header image\"></p>\n<p>Light and flowy bridesmaid dress</p>\n<p><img src=\"projects/Kappi Green Silk Dress/dress_in_progress.jpeg\" alt=\"kappi\"></p>\n"},{"id":"03567414944619929","images":["projects/Neil Suit/header_image.png","projects/Neil Suit/inside_pocket_suit.jpeg","projects/Neil Suit/logo_suit.jpeg"],"headerUrl":"projects/Neil Suit/header_image.png","post":"<h1>Brocade Suit Jacket</h1>\n<p><img src=\"projects/Neil Suit/header_image.png\" alt=\"header image\"></p>\n<p>Suit Jacket</p>\n<p><img src=\"projects/Neil Suit/inside_pocket_suit.jpeg\" alt=\"inside pocket\">\n<img src=\"projects/Neil Suit/logo_suit.jpeg\" alt=\"logo suit\"></p>\n"},{"id":"09474988359340681","images":["projects/Pink Sleeves/drag_sleeves.jpeg","projects/Pink Sleeves/header_image.png"],"headerUrl":"projects/Pink Sleeves/header_image.png","post":"<h1>Sleeves Girl</h1>\n<p><img src=\"projects/Pink Sleeves/header_image.png\" alt=\"header image\"></p>\n<p>Sleeve!</p>\n<p><img src=\"projects/Pink Sleeves/drag_sleeves.jpeg\" alt=\"drag sleeves\"></p>\n"},{"id":"0942600768325504","images":["projects/Purple Sweater/header_image.png"],"headerUrl":"projects/Purple Sweater/header_image.png","post":"<h1>Purple Sweater</h1>\n<p><img src=\"projects/Purple Sweater/header_image.png\" alt=\"header image\"></p>\n<p>This is a purple sweater!</p>\n"},{"id":"09617516947698315","images":["projects/Silk Puffer Samples/header_image.png"],"headerUrl":"projects/Silk Puffer Samples/header_image.png","post":"<h1>Silk Puffer Jacket Samples</h1>\n<p><img src=\"projects/Silk Puffer Samples/header_image.png\" alt=\"header image\"></p>\n<p>Handstitched samples - Silk organza and polyfill</p>\n"},{"id":"04478327584769928","images":["projects/Upcycled Pants - Bleach Dye/header_image.png","projects/Upcycled Pants - Bleach Dye/pants_painted.jpeg"],"headerUrl":"projects/Upcycled Pants - Bleach Dye/header_image.png","post":"<h1>Bleach Dye Upcycle</h1>\n<p><img src=\"projects/Upcycled Pants - Bleach Dye/header_image.png\" alt=\"header image\"></p>\n<p>Bleached and dyed pants</p>\n<p><img src=\"projects/Upcycled Pants - Bleach Dye/pants_painted.jpeg\" alt=\"pants painted\"></p>\n"},{"id":"009280605023753052","images":["projects/baklava knit/balaclava_green_front.jpeg","projects/baklava knit/balaclava_green_side.jpeg","projects/baklava knit/balaclava_light.jpeg","projects/baklava knit/flat_balaclava.jpeg","projects/baklava knit/header_image.png","projects/baklava knit/ravi_balaclava.jpeg"],"headerUrl":"projects/baklava knit/header_image.png","post":"<h1>Balaklava Knit</h1>\n<p><img src=\"projects/baklava knit/header_image.png\" alt=\"header image\"></p>\n<p>Silk &amp; Mohair for these <em><strong>chilly</strong></em> summer days; this air-light hood renders u completely unrecognizable for missions that require absolute comfort and camouflage. <a href=\"https://www.google.com/\">which means</a></p>\n<p><img src=\"projects/baklava knit/balaclava_green_front.jpeg\" alt=\"\">\n<img src=\"projects/baklava knit/balaclava_green_side.jpeg\" alt=\"\">\n<img src=\"projects/baklava knit/balaclava_light.jpeg\" alt=\"\">\n<img src=\"projects/baklava knit/flat_balaclava.jpeg\" alt=\"\">\n<img src=\"projects/baklava knit/ravi_balaclava.jpeg\" alt=\"\"></p>\n"},{"id":"06465003196611929","images":["projects/cow suit/cow_suit_hallway.jpeg","projects/cow suit/header_image.png"],"headerUrl":"projects/cow suit/header_image.png","post":"<h1>Cow Suit</h1>\n<p><img src=\"projects/cow suit/header_image.png\" alt=\"header image\"></p>\n<p>Cows can't wear suits. But people can. Introducing cow suit. It's a suit styled with cow print.</p>\n<p><img src=\"projects/cow suit/cow_suit_hallway.jpeg\" alt=\"cow suit hallway\"></p>\n"},{"id":"04370400745586527","images":["projects/tee shirt/behind_tee.jpeg","projects/tee shirt/bush_tee.jpeg","projects/tee shirt/header_image.png","projects/tee shirt/mask_tee.jpeg"],"headerUrl":"projects/tee shirt/header_image.png","post":"<h1>Possum Dream</h1>\n<p><img src=\"projects/tee shirt/header_image.png\" alt=\"header image\"></p>\n<p>Possum Dream Print</p>\n<p><img src=\"projects/tee shirt/bush_tee.jpeg\" alt=\"\">\n<img src=\"projects/tee shirt/mask_tee.jpeg\" alt=\"\"></p>\n"},{"id":"06684275127457071","images":["projects/the BAG/header_image.png","projects/the BAG/rainbow_bag.jpeg","projects/the BAG/tennis_ball_bag.jpeg"],"headerUrl":"projects/the BAG/header_image.png","post":"<h1>Tennis Bag</h1>\n<p>Evil Spy Tennis Bag - light reactive woven puffer; perfect for tennis game recon missions 🕶️🔦🎾🕴️</p>\n<p><img src=\"projects/the BAG/header_image.png\" alt=\"header image\"></p>\n<p>This is a rainbow bag:</p>\n<p><img src=\"projects/the BAG/rainbow_bag.jpeg\" alt=\"Rainbow Bag\">\n<img src=\"projects/the BAG/tennis_ball_bag.jpeg\" alt=\"tennis ball bag\"></p>\n"},{"id":"015804957437335743","images":["projects/wedding dress/header_image.png","projects/wedding dress/wedding_dress_arm.jpeg","projects/wedding dress/wedding_dress_kiss.jpeg"],"headerUrl":"projects/wedding dress/header_image.png","post":"<h1>Emily's Wedding Dress</h1>\n<p><img src=\"projects/wedding dress/header_image.png\" alt=\"header image\"></p>\n<p>One of the sweetest most precious projects I’ve gotten to work on so far. Thank you @emrubens for trusting me with such a special piece 🥹</p>\n<p>We built this tulle shell to go over a simple, sexy Reformation gown to create this etherial moment against the big Montana sky.</p>\n<p><img src=\"projects/wedding dress/wedding_dress_arm.jpeg\" alt=\"\">\n<img src=\"projects/wedding dress/wedding_dress_kiss.jpeg\" alt=\"\"></p>\n"}];

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
