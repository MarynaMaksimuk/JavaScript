const form = document.getElementById("cuisineForm");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.getElementById("cuisine");
  const description = document.getElementById("desc");
  const image = document.getElementById("cuisineimg");
  const active = document.getElementById("isActive");

  const data = {
    name: name.value,
    description: description.value,
    image: image.value,
    active: active.checked ? "Yes" : "No",
  };
  const body = JSON.stringify(data);
  const init = {
    method: "POST",
    body,
  };
  try {
    await fetch("http://localhost:3000/cuisines", init);
  } catch (error) {
    alert(error.message);
  }
  form.reset();
  window.location.href = "./list_cuisines.html";
});
