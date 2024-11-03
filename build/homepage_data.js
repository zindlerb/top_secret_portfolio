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

let projects = [{"id":"038739425781957104","images":["projects/Cloud Dream/clouddream1.jpeg","projects/Cloud Dream/header_image.png","projects/Cloud Dream/imp_in_the_garden.jpeg"],"headerUrl":"projects/Cloud Dream/header_image.png","post":"<h1>Bespoke</h1>\n<p>Loungewear, made to order\n<img src=\"projects/Cloud Dream/header_image.png\" alt=\"header_image\">\n<img src=\"projects/Cloud Dream/clouddream1.jpeg\" alt=\"\"></p>\n"},{"id":"02238529016598252","images":["projects/Green Blazer Upcycle/GreenBlazer.jpeg","projects/Green Blazer Upcycle/GreenBlazerinAction.jpeg","projects/Green Blazer Upcycle/header_image.png"],"headerUrl":"projects/Green Blazer Upcycle/header_image.png","post":"<h1>Upcycle</h1>\n<p>Thrifted linen blazer with an open back, shoulder ruffles and back tie.</p>\n<p><img src=\"projects/Green Blazer Upcycle/GreenBlazer.jpeg\" alt=\"header_image\">\n<img src=\"projects/Green Blazer Upcycle/GreenBlazerinAction.jpeg\" alt=\"\"></p>\n"},{"id":"012696474552426595","images":["projects/Jens suit/jenssuit1.heic","projects/Jens suit/jenssuit2.heic"]},{"id":"041333895182144786","images":["projects/Kappi Green Silk Dress/dress_in_progress.jpeg","projects/Kappi Green Silk Dress/header_image.png"],"headerUrl":"projects/Kappi Green Silk Dress/header_image.png","post":"<h1>Bespoke</h1>\n<p>Silk dress, made to measure</p>\n<p><img src=\"projects/Kappi Green Silk Dress/header_image.png\" alt=\"header image\">\n<img src=\"projects/Kappi Green Silk Dress/dress_in_progress.jpeg\" alt=\"kappi\"></p>\n"},{"id":"06715465647758618","images":["projects/Neil Suit/C28DE87F-B0C1-4AA1-A852-5578CFA603EF_1_102_o.jpeg","projects/Neil Suit/header_image.png","projects/Neil Suit/inside_pocket_suit.jpeg","projects/Neil Suit/logo_suit.jpeg"],"headerUrl":"projects/Neil Suit/header_image.png","post":"<h1>Bespoke</h1>\n<p>Intricatelu patterned brocade blazer, made to measurement</p>\n<p><img src=\"projects/Neil Suit/header_image.png\" alt=\"header image\">\n<img src=\"projects/Neil Suit/inside_pocket_suit.jpeg\" alt=\"inside pocket\">\n<img src=\"projects/Neil Suit/logo_suit.jpeg\" alt=\"logo suit\"></p>\n"},{"id":"09704777273795342","images":["projects/Purple Sweater/header_image.png","projects/Purple Sweater/sweaterback.jpeg","projects/Purple Sweater/sweaterboobs1.jpeg"],"headerUrl":"projects/Purple Sweater/header_image.png","post":"<h1>Knit</h1>\n<p>Silk &amp; mohair cropped sweater; handknit.</p>\n<p><img src=\"projects/Purple Sweater/header_image.png\" alt=\"\">\n<img src=\"projects/Purple Sweater/sweaterboobs1.jpeg\" alt=\"header_image\">\n<img src=\"projects/Purple Sweater/sweaterback.jpeg\" alt=\"\"></p>\n"},{"id":"012066844734234539","images":["projects/Upcycled Pants - Bleach Dye/bleachedpants1.jpeg","projects/Upcycled Pants - Bleach Dye/bleachedpants2.jpeg","projects/Upcycled Pants - Bleach Dye/header_image.png"],"headerUrl":"projects/Upcycled Pants - Bleach Dye/header_image.png","post":"<h1>Upcycle</h1>\n<p>Green cotton trousers bleached dyed with customized text and patterns.</p>\n<p><img src=\"projects/Upcycled Pants - Bleach Dye/header_image.png\" alt=\"header image\">\n<img src=\"projects/Upcycled Pants - Bleach Dye/bleachedpants1.jpeg\" alt=\"\">\n<img src=\"projects/Upcycled Pants - Bleach Dye/bleachedpants2.jpeg\" alt=\"\"></p>\n"},{"id":"005235635300471442","images":["projects/baklava knit/10840770-F7AA-47C8-84B0-40D8936C58C8_1_102_o.jpeg","projects/baklava knit/12F8B4EF-EA58-4ADD-BC40-D9740EE18280_1_105_c.jpeg","projects/baklava knit/7E954266-4DBF-40A2-835B-92D5867380CD_1_105_c.jpeg","projects/baklava knit/ED9D97E0-1855-43E2-885D-C0AD38408640_1_105_c.jpeg","projects/baklava knit/balaclava_green_front.jpeg","projects/baklava knit/balaclava_green_side.jpeg","projects/baklava knit/balaclava_light.jpeg","projects/baklava knit/header_image.png","projects/baklava knit/ravihood.jpeg"],"headerUrl":"projects/baklava knit/header_image.png","post":"<h1>Hood</h1>\n<p>Handknit hoods made with a light silk and mohair blend. Light, warm, and breathable.</p>\n<p><img src=\"projects/baklava knit/header_image.png\" alt=\"header_image\">\n<img src=\"projects/baklava knit/balaclava_green_front.jpeg\" alt=\"\">\n<img src=\"projects/baklava knit/balaclava_green_side.jpeg\" alt=\"\">\n<img src=\"projects/baklava knit/balaclava_light.jpeg\" alt=\"\">\n<img src=\"projects/baklava knit/ravihood.jpeg\" alt=\"\"></p>\n"},{"id":"04002236677153972","images":["projects/calitailoring/5900D90B-71BD-4546-A119-8FF3A0757006.jpeg","projects/calitailoring/73CA5A48-3C36-4727-9811-DDC2288E6FB6.jpeg"]},{"id":"02857059399648627","images":["projects/cashmerescarf/510FC987-21B8-425F-9F01-E278055B7CED_1_105_c.jpeg","projects/cashmerescarf/B44D1A3E-1CAC-438F-9C91-336D50562D2D_1_105_c.jpeg","projects/cashmerescarf/F51A97A1-029F-43C2-A4B8-A66C39CA7CDA_1_105_c.jpeg"]},{"id":"018378829973129784","images":["projects/cow suit/cow_suit_hallway.jpeg","projects/cow suit/header_image.png"],"headerUrl":"projects/cow suit/header_image.png","post":"<h1>Bespoke</h1>\n<p>Custom cropped suit with wideleg trousers</p>\n<p><img src=\"projects/cow suit/header_image.png\" alt=\"header image\">\n<img src=\"projects/cow suit/cow_suit_hallway.jpeg\" alt=\"cow suit hallway\"></p>\n"},{"id":"034698298526033344","images":["projects/green sheer longsleeve/C8189E10-BCFA-40B8-8537-8496CD3E2378_1_105_c.jpeg"]},{"id":"02084548783065472","images":["projects/jeans/1C7001F9-593D-42FF-A8C4-5760A7CFB220_1_105_c.jpeg"]},{"id":"09454267767903775","images":["projects/knithats/749479EE-4BD2-46CC-9A97-91E847958AD4_1_105_c.jpeg","projects/knithats/BCF5F566-C691-407A-87E4-3CDEE485157A_1_105_c.jpeg","projects/knithats/DA356BE3-A4E9-4FFE-BB86-BEEA89D239FA_1_105_c.jpeg"]},{"id":"04395184181013665","images":["projects/orangedress/6460A223-AD2C-4457-A416-D90B9F12147A_1_105_c.jpeg"]},{"id":"09392549334742875","images":["projects/paintedbuttondown/8677D68C-EE94-45A9-8C09-12BCC74047DA_1_105_c.jpeg"]},{"id":"06503864706187379","images":["projects/robotdress/robotdress1.heic","projects/robotdress/robotdress2.jpeg"]},{"id":"08817484042207362","images":["projects/sheerbra/33B2F1D6-1948-4240-887A-B865DEBE3476_1_105_c.jpeg","projects/sheerbra/E5908818-EC70-44FF-9C25-F16936F72BEF_1_105_c.jpeg"]},{"id":"06519472455326623","images":["projects/stormsjeans/9A69443D-8926-4C22-BAD8-224503948422_1_105_c.jpeg"]},{"id":"032447243682101856","images":["projects/tee shirt/behind_tee.jpeg","projects/tee shirt/bush_tee.jpeg","projects/tee shirt/header_image.png","projects/tee shirt/mask_tee.jpeg"],"headerUrl":"projects/tee shirt/header_image.png","post":"<h1>Custom</h1>\n<p>Possum Dream collage shirt, printed on heavy organic cotton tees.\n<img src=\"projects/tee shirt/header_image.png\" alt=\"\">\n<img src=\"projects/tee shirt/mask_tee.jpeg\" alt=\"header_image\">\n<img src=\"projects/tee shirt/behind_tee.jpeg\" alt=\"\"></p>\n"},{"id":"07786611554339471","images":["projects/the BAG/header_image.png","projects/the BAG/rainbow_bag.jpeg","projects/the BAG/tennis_ball_bag.jpeg"],"headerUrl":"projects/the BAG/header_image.png","post":"<h1>Bespoke</h1>\n<p>Custom 2-pocket tennis bag with woven light-reactive fabric.</p>\n<p><img src=\"projects/the BAG/header_image.png\" alt=\"header image\">\n<img src=\"projects/the BAG/rainbow_bag.jpeg\" alt=\"Rainbow Bag\">\n<img src=\"projects/the BAG/tennis_ball_bag.jpeg\" alt=\"tennis ball bag\"></p>\n"},{"id":"002675516280545387","images":["projects/wedding dress/header_image.png","projects/wedding dress/wedding_dress_arm.jpeg","projects/wedding dress/wedding_dress_kiss.jpeg"],"headerUrl":"projects/wedding dress/header_image.png","post":"<h1>Bespoke</h1>\n<p>A cream tulle over dress and detachable sleeves to accessorize a simple, sexy Reformation slip dress.</p>\n<p><img src=\"projects/wedding dress/header_image.png\" alt=\"\">\n<img src=\"projects/wedding dress/wedding_dress_arm.jpeg\" alt=\"\">\n<img src=\"projects/wedding dress/wedding_dress_kiss.jpeg\" alt=\"header_image\"></p>\n"},{"id":"006797847939073254","images":["projects/window pants/1318794B-16C4-4245-810E-7952731F4C82_1_105_c.jpeg","projects/window pants/C1AF4D71-F75C-4ACD-BCC7-6718219A72A2_1_105_c.jpeg"]},{"id":"04868485234264137","images":["projects/wovenbuttondown/23EC4EFF-012B-40CE-A0CA-F564DBF3899F_1_105_c.jpeg","projects/wovenbuttondown/AB58A211-18CB-4F7A-B813-7D42E327806B_1_102_o.jpeg"]}];

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
