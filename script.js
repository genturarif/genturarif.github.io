// Dark Mode
let icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "img/dark theme icon/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "img/dark theme icon/moon.png";
    localStorage.removeItem("theme");
  }
};

if (localStorage.getItem("theme") == "dark") {
  icon.onclick();
}

// Hamburger Menu
let nav = document.querySelector("nav");

if (document.body.classList.contains("dark-theme")) {
  nav.classList.add("navbar-dark");
} else {
  nav.classList.remove("navbar-dark");
}

icon.addEventListener("click", () => {
  if (document.body.classList.contains("dark-theme")) {
    nav.classList.add("navbar-dark");
  } else {
    nav.classList.remove("navbar-dark");
  }
});
