
  function setThemeBasedOnTime() {
    const date = new Date();
    const hour = date.getHours();
    const isLightMode = hour >= 6 && hour < 18; 
    if (isLightMode) {
      document.querySelector('link[href="home.css"]').href = "home-light.css";
      document.querySelector('link[href="footer.css"]').href = "footer-light.css";
      document.querySelector('link[href="guide.css"]').href = "guide-light.css";
    } else {
      document.querySelector('link[href="home-light.css"]').href = "home.css";
      document.querySelector('link[href="footer-light.css"]').href = "footer.css";
      document.querySelector('link[href="guide-light.css"]').href = "guide.css";
    }
  }
  setThemeBasedOnTime();
  setInterval(setThemeBasedOnTime, 360);