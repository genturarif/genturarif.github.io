// Dark Mode
let icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "img/dark theme icon/sun.png";
  } else {
    icon.src = "img/dark theme icon/moon.png";
  }
};

// Hamburger Menu
let nav = document.querySelector("nav");
nav.onclick = function () {
  if (document.body.classList.contains("dark-theme")) {
    nav.classList.add("navbar-dark");
  } else {
    nav.classList.remove("navbar-dark");
  }
};
