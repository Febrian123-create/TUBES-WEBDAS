
  function setThemeBasedOnTime() {
    const date = new Date();
    const hour = date.getHours();
    const isLightMode = hour >= 6 && hour < 18; 
    if (isLightMode) {
      document.body.classList.add('light-mode');
      document.querySelector('link[href="home.css"]').href = "home-light.css";
      document.querySelector('link[href="footer.css"]').href = "footer-light.css";
      document.querySelector('link[href="template.css"]').href = "template-light.css";
    } else {
      document.body.classList.remove('light-mode');
      document.querySelector('link[href="home-light.css"]').href = "home.css";
      document.querySelector('link[href="footer-light.css"]').href = "footer.css";
      document.querySelector('link[href="template-light.css"]').href = "template.css";
    }
  }
  setThemeBasedOnTime();
  setInterval(setThemeBasedOnTime, 360); 