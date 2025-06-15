document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("galleryList");
  fetch("./JSON/dolci.json")
    .then(res => res.json())
    .then(data => {
      for(let i = 0; i <=8; i++){
        const card = document.createElement("div");
        card.className = "antipasti-card";

        if(i === 4) {
          card.innerHTML = `
            <img src="${data[i].img}" alt="${data[i].nama}">
          `;
        } 
        else {
          card.innerHTML = `
            <img src="${data[i].img}" alt="${data[i].nama}">
            <div class="card-overlay">
              <h3 class="card-title">${data[i].nama}</h3>
              <p class="card-desc">${data[i].tipe}</p>
            </div>
          `;
        }
        gallery.appendChild(card);
      }
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