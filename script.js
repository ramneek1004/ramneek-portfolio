const themeButton = document.getElementById("theme-toggle");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const lightMode = document.body.classList.contains("light");
    themeButton.textContent = lightMode ? "☾" : "☀";
    themeButton.setAttribute("aria-label", lightMode ? "Switch to dark mode" : "Switch to light mode");
});
