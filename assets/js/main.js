window.addEventListener("scroll", function() {
let navbar = document.querySelector(".custom-navbar");
navbar.classList.toggle("scrolled", window.scrollY > 50);
});
