const previews = [
  {
    image: "./Style/image_1.png",
  },

  {
    image: "./Style/image_2.png",
  },

  {
    image: "./Style/image_3.png",
  },

  {
    image: "./Style/image_4.png",
  },

  {
    image: "./Style/image_5.png",
  },

  {
    image: "./Style/image_6.png",
  },

  {
    image: "./Style/image_7.png",
  },

  {
    image: "./Style/image_8.png",
  },

  {
    image: "./Style/image_9.png",
  },
];

let current = 0;

setInterval(() => {
  current = (current + 1) % previews.length;
  const preview = previews[current];

  document.getElementById("app-image").src = preview.image;
}, 3000);
