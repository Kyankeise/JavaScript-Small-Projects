// Author: Kyan Keise
// Date: 30/05/22
// Title: Split Landing Page

// Declared Variables
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

// Event Listeners
left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

// Event Listeners
right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
