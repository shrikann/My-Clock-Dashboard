const toggle = document.getElementById("modeToggle");
const body = document.body;

function setTheme(mode) {
  if (mode === "light") {
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
    toggle.checked = true;
  } else {
    body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
    toggle.checked = false;
  }
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

// Toggle theme on switch change
toggle.addEventListener("change", () => {
  setTheme(toggle.checked ? "light" : "dark");
});
