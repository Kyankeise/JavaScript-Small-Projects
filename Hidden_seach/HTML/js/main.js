// Author: Kyan Keise
// Date: Date: 30/05/2022
// Title: Hidden Search widget

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
