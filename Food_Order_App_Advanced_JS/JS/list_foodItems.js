async function getFoodItems() {
  const tbody = document.querySelector("tbody");
  try {
    const response = await fetch("http://localhost:3000/foodItems");
    if (!response.ok) {
      throw new Error("HTTP error", response.status);
    }
    const data = await response.json();

    for (let [index, foodItem] of data.entries()) {
      tbody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${foodItem.name}</td>
            <td>${foodItem.description}</td>
            <td>${foodItem.inStock}</td>
            <td>${foodItem.isVeg}</td>
            <td>${foodItem.category}</td>
            <td>${foodItem.cuisine}</td>
            <td><img src="${foodItem.foodImage}"width="100px"></td>
            <td><button class="btn">Edit</button></td>
        </tr>
        `;
    }
  } catch (error) {
    alert(error.message);
  }
}
getFoodItems();
