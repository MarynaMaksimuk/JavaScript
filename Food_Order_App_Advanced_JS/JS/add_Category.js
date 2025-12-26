const form = document.getElementById("categoryForm");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const category = document.getElementById("category");
  const description = document.getElementById("desc");
  const isActive = document.getElementById("isActive");
  const image = document.getElementById("categoryimg");

  const newCategory = {
    name: category.value,
    description: description.value,
    active: isActive.checked ? "Yes" : "No",
    image: image.value,
  };
  const body = JSON.stringify(newCategory);
  const init = {
    method: "POST",
    body,
  };
  try {
    await fetch("http://localhost:3000/categories", init);
  } catch (error) {
    alert(error.message);
  }
  form.reset();
  window.location.href = "./list_categories.html";
});
