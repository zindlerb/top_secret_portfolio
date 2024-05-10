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

let projects = [
  {
    id: "09511020002881272",
    image: "projects/Beadwork/header_image.png",
    headerUrl: "projects/Beadwork/header_image.png",
    title: "Embroidery & Beadwork Sample",
    date: "2023",
    posts: [
      {
        id: "09511020002881272",
        title: "Embroidery & Beadwork Sample",
        images: ["projects/Beadwork/header_image.png"],
        text: "<p>Glass beads and mohair embroidery</p>\n",
      },
    ],
  },
  {
    id: "05525937033877315",
    image: "projects/Cloud Dream/header_image.png",
    headerUrl: "projects/Cloud Dream/header_image.png",
    title: "Cloud Dream",
    date: "2020",
    posts: [
      {
        id: "05525937033877315",
        title: "Cloud Dream",
        images: ["projects/Cloud Dream/header_image.png"],
        text: "<p>Lounge wear - light as air</p>\n",
      },
    ],
  },
  {
    id: "027176645194401083",
    image: "projects/Fur Bunny/header_image.png",
    headerUrl: "projects/Fur Bunny/header_image.png",
    title: "Bunny",
    date: "2022",
    posts: [
      {
        id: "027176645194401083",
        title: "Bunny",
        images: ["projects/Fur Bunny/header_image.png"],
        text: "<p>A mink fur coat transformed.</p>\n",
      },
    ],
  },
  {
    id: "02851380706307578",
    image: "projects/Green Blazer Upcycle/header_image.png",
    headerUrl: "projects/Green Blazer Upcycle/header_image.png",
    title: "Green Blazer Upcycle",
    date: "2022",
    posts: [
      {
        id: "02851380706307578",
        title: "Green Blazer Upcycle",
        images: ["projects/Green Blazer Upcycle/header_image.png"],
        text: "<p>Inspired by the Peter Do Open Back Blazer - thrifted and upcycled</p>\n",
      },
    ],
  },
  {
    id: "0513357586241588",
    image: "projects/Green Silk Suit/header_image.png",
    headerUrl: "projects/Green Silk Suit/header_image.png",
    title: "Green Suit",
    date: "2021",
    posts: [
      {
        id: "0513357586241588",
        title: "Green Suit",
        images: ["projects/Green Silk Suit/header_image.png"],
        text: "<p>Green Silk Two Piece</p>\n",
      },
    ],
  },
  {
    id: "06018313549071999",
    image: "projects/Kappi Green Silk Dress/header_image.png",
    headerUrl: "projects/Kappi Green Silk Dress/header_image.png",
    title: "Green Silk",
    date: "2022",
    posts: [
      {
        id: "06018313549071999",
        title: "Green Silk",
        images: ["projects/Kappi Green Silk Dress/header_image.png"],
        text: "<p>Light and flowy bridesmaid dress</p>\n",
      },
    ],
  },
  {
    id: "020018472255784614",
    image: "projects/Neil Suit/header_image.png",
    headerUrl: "projects/Neil Suit/header_image.png",
    title: "Brocade Suit Jacket",
    date: "2024",
    posts: [
      {
        id: "020018472255784614",
        title: "Brocade Suit Jacket",
        images: ["projects/Neil Suit/header_image.png"],
        text: "<p>Suit Jacket</p>\n",
      },
    ],
  },
  {
    id: "09105433524670936",
    image: "projects/Pink Sleeves/header_image.png",
    headerUrl: "projects/Pink Sleeves/header_image.png",
    title: "Sleeves Girl",
    date: "2023",
    posts: [
      {
        id: "09105433524670936",
        title: "Sleeves Girl",
        images: ["projects/Pink Sleeves/header_image.png"],
        text: "<p>Sleeve!</p>\n",
      },
    ],
  },
  {
    id: "06930280231394275",
    image: "projects/Purple Sweater/header_image.png",
    headerUrl: "projects/Purple Sweater/header_image.png",
    title: "Purple Sweater",
    posts: [
      {
        id: "06930280231394275",
        title: "Purple Sweater",
        images: ["projects/Purple Sweater/header_image.png"],
        text: "<p>This is a purple sweater!</p>\n",
      },
    ],
  },
  {
    id: "0442349214716089",
    image: "projects/Silk Puffer Samples/header_image.png",
    headerUrl: "projects/Silk Puffer Samples/header_image.png",
    title: "Silk Puffer Jacket Samples",
    date: "2023",
    posts: [
      {
        id: "0442349214716089",
        title: "Silk Puffer Jacket Samples",
        images: ["projects/Silk Puffer Samples/header_image.png"],
        text: "<p>Handstitched samples - Silk organza and polyfill</p>\n",
      },
    ],
  },
  {
    id: "07144042806263993",
    image: "projects/Upcycled Pants - Bleach Dye/header_image.png",
    headerUrl: "projects/Upcycled Pants - Bleach Dye/header_image.png",
    title: "Bleach Dye Upcycle",
    date: "2022",
    posts: [
      {
        id: "07144042806263993",
        title: "Bleach Dye Upcycle",
        images: ["projects/Upcycled Pants - Bleach Dye/header_image.png"],
        text: "<p>Bleached and dyed pants</p>\n",
      },
    ],
  },
  {
    id: "08142244926122637",
    image: "projects/baklava knit/header_image.png",
    headerUrl: "projects/baklava knit/header_image.png",
    title: "Balaklava Knit",
    date: "7/9/23",
    posts: [
      {
        id: "08142244926122637",
        title: "Balaklava Knit",
        images: ["projects/baklava knit/header_image.png"],
        text: '<h1>Some header</h1>\n<p>Silk &amp; Mohair for these <em><strong>chilly</strong></em> summer days; this air-light hood renders u completely unrecognizable for missions that require absolute comfort and camouflage.\n<a href="https://www.google.com/">which means</a></p>\n',
      },
    ],
  },
  {
    id: "05965236416809621",
    image: "projects/cow suit/header_image.png",
    headerUrl: "projects/cow suit/header_image.png",
    title: "Cow Suit",
    date: "6/15/21",
    posts: [
      {
        id: "05965236416809621",
        title: "Cow Suit",
        images: ["projects/cow suit/header_image.png"],
        text: "<p>Cows can't wear suits. But people can. Introducing cow suit. It's a suit styled with cow print.</p>\n",
      },
    ],
  },
  {
    id: "0741636390388553",
    image: "projects/tee shirt/header_image.png",
    headerUrl: "projects/tee shirt/header_image.png",
    title: "Possum Dream",
    date: "2021",
    posts: [
      {
        id: "0741636390388553",
        title: "Possum Dream",
        images: ["projects/tee shirt/header_image.png"],
        text: "<p>Possum Dream Print</p>\n",
      },
    ],
  },
  {
    id: "06261966848403198",
    image: "projects/the BAG/header_image.png",
    headerUrl: "projects/the BAG/header_image.png",
    title: "THE BAG.",
    date: "6/27/23",
    posts: [
      {
        id: "06261966848403198",
        title: "THE BAG.",
        images: ["projects/the BAG/header_image.png"],
        text: "<p>Evil Spy Tennis Bag - light reactive woven puffer; perfect for tennis game recon missions 🕶️🔦🎾🕴️</p>\n",
      },
    ],
  },
  {
    id: "03963289823738232",
    image: "projects/wedding dress/header_image.png",
    headerUrl: "projects/wedding dress/header_image.png",
    title: "Emily's Wedding Dress",
    date: "09/16/22",
    posts: [
      {
        id: "03963289823738232",
        title: "Emily's Wedding Dress",
        images: ["projects/wedding dress/header_image.png"],
        text: "<p>One of the sweetest most precious projects I’ve gotten to work on so far. Thank you @emrubens for trusting me with such a special piece 🥹</p>\n<p>We built this tulle shell to go over a simple, sexy Reformation gown to create this etherial moment against the big Montana sky.</p>\n",
      },
    ],
  },
];

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
    src: project.image,
    style: `${transformCSS} ${topCSS} ${leftCSS}`,
  });
  timelineNode.append(imgNode);

  // Add posts
  for (let post of project.posts) {
    const postNode = dom(
      "DIV",
      {},
      `
        <div class='post' id='post-${post.id}'>
          <h1 class='title'>${post.title}</h1>
          <img src='${post.images[0]}'>
          <p class='text'>${post.text}</p>
        </div>
    `,
    );

    sectionNode.append(postNode);
  }

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
    scale + 0.001 * event.deltaY,
    translateX,
    translateY,
  );
});

// Drag handlers
let grabbing = false;
let mouseDownPoint;
let originalTranslateProperties;
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