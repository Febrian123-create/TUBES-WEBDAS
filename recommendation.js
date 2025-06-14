fetch("recommendation.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("restoranContainer");

    data.forEach(resto => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${resto.gambar}" alt="${resto.nama}" />
        <div class="card-content">
          <h2>${resto.nama}</h2>
          <p><strong>Lokasi:</strong> ${resto.lokasi}</p>
          <p><strong>Rating:</strong> ${resto.rating}</p>
          <p>${resto.deskripsi}</p>
          <p class="menu-khas"><strong>Menu Rekomendasi:</strong> ${resto.menurekomendasi}</p>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Gagal memuat data restoran:", error);
  });
