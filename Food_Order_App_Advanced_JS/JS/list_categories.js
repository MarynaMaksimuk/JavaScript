async function getCategories() {
  const tbody = document.querySelector("tbody");
  try {
    const response = await fetch("http://localhost:3000/categories");
    if (!response.ok) {
      throw new Error("HTTP error", response.status);
    }

    const data = await response.json();
    for (let [index, category] of data.entries()) {
      tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${category.name}</td>
                <td>${category.description}</td>
                <td>${category.active}</td>
                <td><img src="${category.image}"           width="100px"></td>
                <td><button class="btn">Edit</button></td>
        `;
    }
  } catch (error) {
    alert(error.message);
  }
}

getCategories();
