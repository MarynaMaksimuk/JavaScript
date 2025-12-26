async function getRestaurants() {
  const tbody = document.querySelector("tbody");
  try {
    const response = await fetch("http://localhost:3000/restaurants");
    if (!response.ok) {
      throw new Error("HTTP error", response.status);
    }
    const data = await response.json();
    for (let [index, restaurant] of data.entries()) {
      tbody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${restaurant.name}</td>
            <td><img src="${restaurant.image}"width="80px" height="80px"></td>
            <td>${restaurant.address}</td>
            <td>${restaurant.contact}</td>
            <td><button class="btn">Edit</button></td>
                    </tr>
        `;
    }
  } catch (error) {
    alert(error.message);
  }
}
getRestaurants();
