
// Loading screen //
  document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader-screen");
    const main = document.getElementById("main-content");
    const logo = document.getElementById("loader-logo");
  
    logo.addEventListener("click", () => {
      loader.style.display = "none";
      main.style.display = "block";
    });
  });
  // Loading screen //


  
  // theme switch //

  document.addEventListener("DOMContentLoaded", () => {
    const themeLinks = document.querySelectorAll('[data-theme]');
    const root = document.documentElement;
  
    // Laad opgeslagen theme bij herladen
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
      applyTheme(savedTheme);
    }
  
    themeLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedTheme = e.target.getAttribute("data-theme");
        applyTheme(selectedTheme);
        localStorage.setItem("selectedTheme", selectedTheme);
      });
    });
  
    function applyTheme(theme) {
      switch (theme) {
        case "classic":
          root.style.setProperty('--background-color', '#000000');
          root.style.setProperty('--secondary-bg-color', '#1a1a1a');
          root.style.setProperty('--text-color', '#ffffff');
          root.style.setProperty('--accent-color', '#0d6efd'); // Bootstrap primary
          root.style.setProperty('--highlight-color', '#6c757d');
          break;
        case "dark":
          root.style.setProperty('--background-color', '#0e0b16');
          root.style.setProperty('--secondary-bg-color', '#1a102c');
          root.style.setProperty('--text-color', '#e0d6f5');
          root.style.setProperty('--accent-color', '#9b5de5');
          root.style.setProperty('--highlight-color', '#00f5d4');
          break;
        case "zelda":
          root.style.setProperty('--background-color', '#0b1d0f');
          root.style.setProperty('--secondary-bg-color', '#163b1d');
          root.style.setProperty('--text-color', '#e2ffe8');
          root.style.setProperty('--accent-color', '#00c896');
          root.style.setProperty('--highlight-color', '#ffd700'); 
          break;
        case "onepiece":
          root.style.setProperty('--background-color', '#001f3f');
          root.style.setProperty('--secondary-bg-color', '#003366');
          root.style.setProperty('--text-color', '#f0f8ff');
          root.style.setProperty('--accent-color', '#ff851b'); 
          root.style.setProperty('--highlight-color', '#7fdbff'); 
          break;
        default:
          console.warn("Unknown theme selected");
          break;
      }
  
      // Pas body- en component-kleuren toe
      document.body.style.backgroundColor = getComputedStyle(root).getPropertyValue('--background-color');
      document.body.style.color = getComputedStyle(root).getPropertyValue('--text-color');
    }
  });

  document.querySelectorAll('[data-theme]').forEach(item => {
    item.addEventListener('click', function () {
      const theme = this.getAttribute('data-theme');
      document.documentElement.setAttribute('data-theme', theme);
    });
  });
  
  
  // theme switch //
