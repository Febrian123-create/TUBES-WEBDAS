  document.addEventListener("DOMContentLoaded", () => {
    const foodId = localStorage.getItem("selectedFoodId");
    const category = localStorage.getItem("selectedCategory");

    const foodDetailContainer = document.getElementById("foodDetail");

    if (!foodId || !category) {
      foodDetailContainer.innerHTML = "<p>No food selected. Please go back and select a food item.</p>";
      return;
    }

    const jsonPath = `./JSON/${category}.json`;

    fetch(jsonPath)
      .then(res => res.json())
      .then(data => {
        const selectedFood = data.find(item => item.id == foodId);
        if (selectedFood) {
          if(foodId == 4){
            console.log(selectedFood)
          }
        else if(foodId !== 4){
          foodDetailContainer.innerHTML = `   
            <h1>${selectedFood.nama}</h1>
              <p class="food-type">${selectedFood.tipe}</p>
            <div class="food-content">
              <img src="${selectedFood.img}" alt="${selectedFood.nama}">
              <div class="food-info">
                <h2>Description:</h2>
                <p>${selectedFood.description}</p>
                <h2>History:</h2>
                <p>${selectedFood.history}</p>
                <h2>Preparation:</h2>
                <p>${selectedFood.preparation}</p>
              </div>
            </div>
          `;
        }
        } else {
          foodDetailContainer.innerHTML = "<p>Food item not found.</p>";
        }
      })
      .catch(error => {
        console.error("Error loading food data:", error);
        foodDetailContainer.innerHTML = "<p>Error loading food details. Please try again later.</p>";
      });
  });
