        
function setTheme(theme) {
  // Add or remove the "dark" class based on chosen theme
  document.body.classList.toggle("dark", theme === "dark");

  // Save the chosen theme
  localStorage.setItem("theme", theme);

  // Update button text & icon
  const btn = document.getElementById("themeToggleButton");
  if (theme === "dark") {
    btn.textContent = "🌙 Dark Mode";
  } else {
    btn.textContent = "🌞 Light Mode";
  }
}

// Button click listener
document.getElementById("themeToggleButton").addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  setTheme(newTheme);
});

// Apply saved theme on page load
setTheme(localStorage.getItem("theme") || "light");