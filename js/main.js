
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


  
  
  
