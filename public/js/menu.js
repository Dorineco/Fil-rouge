// Menu burger
const burger = document.getElementById("burgerBtn");
const menu = document.getElementById("Menu");
const lines = burger.querySelectorAll(".burger-line");// renvoie une NodeList

burger.addEventListener("click", () => {
    menu.classList.toggle("hidden"); // toggle la visibilité

    // Burger → croix
    lines[0].classList.toggle("rotate-45");
    lines[0].classList.toggle("translate-y-1.5");

    lines[1].classList.toggle("opacity-0");

    lines[2].classList.toggle("-rotate-45");
    lines[2].classList.toggle("-translate-y-1.5");
});