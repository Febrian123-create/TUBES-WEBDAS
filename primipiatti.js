document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("galleryList");

  fetch("./JSON/primipiatti.json")
    .then(res => res.json())
    .then(data => {
      for(let i = 0; i <=10; i++){
        const kotak = document.createElement("div");
        kotak.className = "kotak";
        if(i==4){
            kotak.innerHTML = `
            <img src="${data[i].img}">
        `;
        }
        else{
            kotak.innerHTML = `
            <img src="${data[i].img}">
            <p>${data[i].nama}</p>
            <div class="hover-box">
                <div class="plus-icon"></div>
                <div class="hover-text">${data[i].deskripsi}</div>
            </div>
        `;
        }
        list.appendChild(kotak);
      };
    });
});
