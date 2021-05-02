const mobileMenu = document.querySelector(".mobile");
const nav = document.querySelector(".header-nav");
const close = document.querySelector(".mobile");
const navContent = document.querySelectorAll(".nav-links");

//event listeners
mobileMenu.addEventListener("click", openMobile);

//functions
function openMobile() {
  nav.classList.toggle("open");
  close.classList.toggle("close");
}

navContent.forEach((links) => {
  links.addEventListener("click", () => {
    links.classList.toggle("links-active");
  })
})


