
  const themes = ["theme1", "theme2", "theme3", "theme4"];
  let currentTheme = 0;

  function switchTheme() {
    currentTheme = (currentTheme + 1) % themes.length;
    document.documentElement.setAttribute("data-theme", themes[currentTheme]);
  }

  document.getElementById("themeSwitchBtn").addEventListener("click", switchTheme);
  document.getElementById("themeSwitchBtnMobile").addEventListener("click", switchTheme);
 