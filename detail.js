document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("galleryList");
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
  // Mapping antara nama halaman dan file JSON
  const jsonFiles = {
    'antipasti': 'antipasti.json',
    'primipiatti': 'primipiatti.json',
    'secondipiatti': 'secondipiatti.json',
    'pizza': 'pizza.json',
    'dolci': 'dolci.json',
    'bevande': 'bevande.json'
  };
  // Cek apakah halaman ada dalam mapping
  if (jsonFiles[currentPage]) {
    fetch(`./JSON/${jsonFiles[currentPage]}`)
      .then(res => res.json())
      .then(data => {
      for(let i = 0; i <=8; i++){
        const card = document.createElement("div");
        card.className = "antipasti-card";
        if(i === 4) {
          card.innerHTML = `
            <img src="${data[i].img}" alt="${data[i].nama}">`;
        }else{
        card.innerHTML =`
          <img src="${data[i].img}" alt="${data[i].nama}">
          <div class="card-overlay">
            <h3 class="card-title">${data[i].nama}</h3>
            <p class="card-type">${data[i].tipe}</p>
          </div>
        `;}
        // Tambahkan click handler
        card.addEventListener("click", () => {
          localStorage.setItem("selectedFoodId", data[i].id); // Simpan ID
          localStorage.setItem("selectedCategory", currentPage);
          window.location.href = "history.html"; // Redirect
        });
        gallery.appendChild(card);
      };
    });
  }});