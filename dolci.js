document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("galleryList");

  fetch("./JSON/dolci.json")
    .then(res => res.json())
    .then(data => {
      data.slice(0, 10).forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "antipasti-card";
        
        if(index === 4) {
          card.innerHTML = `
            <img src="${item.img}" alt="${item.nama}">
          `;
        } else {
          card.innerHTML = `
            <img src="${item.img}" alt="${item.nama}">
            <div class="card-overlay">
              <h3 class="card-title">${item.nama}</h3>
              <p class="card-desc">${item.tipe}</p>
            </div>
          `;
        }
        gallery.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading gallery:", error);
      gallery.innerHTML = `
        <div class="error-message">
          <p>Failed to load content. Please try again later.</p>
        </div>
      `;
    });
});

