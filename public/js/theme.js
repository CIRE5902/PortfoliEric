// public/js/theme.js
const themeMap = {
  dark: "light", 
  light: "eric", 
  eric: "dark"
};

const currentTheme = localStorage.getItem("theme") || Object.keys(themeMap)[0];
document.body.classList.add(currentTheme);
localStorage.setItem("theme", currentTheme);

document.getElementById("theme-button").onclick = (e) => {
  e.preventDefault();
  const next = themeMap[document.body.classList.value];
  document.body.classList.replace(document.body.classList.value, next);
  localStorage.setItem("theme", next);
};
