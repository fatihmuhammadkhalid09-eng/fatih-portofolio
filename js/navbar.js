const menuToggle = document.getElementById("menuToggle");

const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
});
