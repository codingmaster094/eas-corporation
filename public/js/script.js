document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const sideMenu = document.querySelector(".side-menu");
  const closeIcon = document.querySelector(".close-icon");

  menuIcon.addEventListener("click", function () {
    sideMenu.classList.add("open");
  });

  closeIcon.addEventListener("click", function () {
    sideMenu.classList.remove("open");
  });
});
