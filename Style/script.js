const previews = [
  {
    image: "../Style/preview_image-1.png",
    left: {
      title: "Discover Restaurants",
      text: "Explore a variety of food options tailored to your city and taste.",
    },
    right: {
      title: "Best in Bangalore",
      text: "Find top-rated restaurants like 'Best South Indian in Bangalore' and more.",
    },
  },
  {
    image: "../Style/preview_image-2.png",
    left: {
      title: "Pick Your Style",
      text: "Whether it’s a casual cafe, family dine-in, or buzzing bar — we’ve got it all.",
    },
    right: {
      title: "Filter by Type",
      text: "Choose from Dine-in, Bars, Cafes, and many more categories.",
    },
  },
  {
    image: "../Style/preview_image-3.png",
    left: {
      title: "Customize Your Search",
      text: "Set your budget, number of people, and how far you're willing to go.",
    },
    right: {
      title: "Smart Filters",
      text: "Let Fitinyour find the perfect place that fits your criteria.",
    },
  },
  {
    image: "../Style/preview_image-4.png",
    left: {
      title: "View on Map",
      text: "Instantly see the restaurant location based on your preferences.",
    },
    right: {
      title: "Ask Fitbot",
      text: "Still unsure? Chat with Fitbot for detailed insights and suggestions.",
    },
  },
  {
    image: "../Style/preview_image-5.png",
    left: {
      title: "Instant Help",
      text: "Get real-time restaurant info from Fitbot based on your search.",
    },
    right: {
      title: "Personal Assistant",
      text: "Let Fitbot answer all your questions about the place you're considering.",
    },
  },
  {
    image: "../Style/preview_image-6.png",
    left: {
      title: "All-in-One Profile",
      text: "View rewards, notifications, and manage your activity in one place.",
    },
    right: {
      title: "Stay Connected",
      text: "Reach out to support, send feedback, and access help when needed.",
    },
  },
  {
    image: "../Style/preview_image-7.png",
    left: {
      title: "Get Rewarded",
      text: "Enjoy up to ₹200 on your first app download — no strings attached!",
    },
    right: {
      title: "Start Saving",
      text: "Join now and unlock instant benefits just by signing up.",
    },
  },
];

let current = 0;

setInterval(() => {
  current = (current + 1) % previews.length;
  const preview = previews[current];

  document.getElementById("app-image").src = preview.image;
  document.getElementById(
    "left-text"
  ).innerHTML = `<h3>${preview.left.title}</h3><p>${preview.left.text}</p>`;
  document.getElementById(
    "right-text"
  ).innerHTML = `<h3>${preview.right.title}</h3><p>${preview.right.text}</p>`;
}, 3000);
