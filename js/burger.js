const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger__menu");

burgerMenu.addEventListener("click", () => {
    burger.classList.toggle("active")
});
