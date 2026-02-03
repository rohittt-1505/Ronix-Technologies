window.addEventListener("scroll", function(){
let nav=document.querySelector(".custom-navbar");
nav.classList.toggle("scrolled",window.scrollY>50);
});
