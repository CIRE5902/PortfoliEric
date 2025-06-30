const themeMap = {
  dark: "light",
  light: "eric",
  eric: "dark",
};

const bodyClass = document.body.classList;

// Inicializar tema desde localStorage o por defecto
const saved = localStorage.getItem("theme") || "dark";
bodyClass.add(saved);
setIconVisibility(saved);

// Alternar tema al hacer clic
function toggleTheme(event) {
  event.preventDefault();

  const current = localStorage.getItem("theme") || "dark";
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem("theme", next);
  setIconVisibility(next);
}

function setIconVisibility(theme) {
  document.querySelectorAll(".theme-icon").forEach((el) => {
    el.style.display = "none";
  });
  const icon = document.getElementById(theme + "Icon");
  if (icon) icon.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("themeButton")?.addEventListener("click", toggleTheme);
});
