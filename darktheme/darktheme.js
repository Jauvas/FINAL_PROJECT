// Get the body element and a reference to the toggle button (if applicable)
const body = document.body;
const toggleButton = document.getElementById("theme-toggle"); // Replace with your button ID

// Check for user's preference in local storage (optional)
const storedTheme = localStorage.getItem("theme");

// Set the theme based on preference or default
if (storedTheme === "dark") {
  body.classList.add("dark-theme");
} else {
  body.classList.add("light-theme");
}

// Add event listener to toggle button (if applicable)
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");

    // Store the theme in local storage for persistence (optional)
    localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
  });
}
