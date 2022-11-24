document.addEventListener("DOMContentLoaded", function () {
  document;

  const menu = document.querySelector("button");
  const closed = document.querySelector(".closed");
  const container = document.querySelector(".container");

  closed.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.remove("menuOuvert");
  });

  menu.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.add("menuOuvert");
  });
});
