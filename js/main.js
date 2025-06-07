
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


  document.querySelectorAll('[data-theme]').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const theme = this.getAttribute('data-theme');
      document.documentElement.setAttribute('data-theme', theme);
    });
  });
  
  
