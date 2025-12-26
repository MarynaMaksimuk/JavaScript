const form = document.getElementById("foodItemForm");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.getElementById("fname");
  const description = document.getElementById("desc");
  const instock = document.getElementById("instock");
  const isveg = document.getElementById("isVeg");
  const category = document.getElementById("category");
  const cuisine = document.getElementById("cuisine");
  const image = document.getElementById("foodimg");

  const data = {
    name: name.value,
    description: description.value,
    inStock: instock.checked ? "Yes" : "No",
    isVeg: isveg.checked ? "Yes" : "No",
    category: category.value,
    cuisine: cuisine.value,
    foodImage: image.value,
  };
  const body = JSON.stringify(data);
  const init = {
    method: "POST",
    body,
  };
  try {
    await fetch("http://localhost:3000/foodItems", init);
  } catch (error) {
    alert(error.message);
  }
  form.reset();
  window.location.href = "./list_fooditems.html";
});
