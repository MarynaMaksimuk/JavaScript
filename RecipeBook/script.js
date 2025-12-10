const recipes = [
  {
    title: "Spaghetti Bolognese",
    ingredients: "spaghetti, minced meat, tomato sauce, onion, garlic",
    instructions: "Boil spaghetti, Brown minced meat, Add sauce, Mix together",
  },
  {
    title: "Chicken Curry",
    ingredients: "chicken, curry powder, coconut milk, onion, garlic",
    instructions:
      "Brown chicken, Add onion and garlic, Stir in curry powder, Add coconut milk, Simmer",
  },
];

const recipeTitle = document.getElementById("title");
const recipeIngredients = document.getElementById("ingredients");
const recipeInstructions = document.getElementById("instructions");
const recipeContainer = document.getElementById("recipes");
const submitButton = document.querySelector(".submit-btn");

function addRecipe(recipe) {
  const card = document.createElement("div");
  card.className = "recipe-card highlight-form ";

  const ingredientsArray = recipe.ingredients
    .split(",")
    .map((ing) => ing.trim());
  const instructionsArray = recipe.instructions
    .split(",")
    .map((inst) => inst.trim());
  // Create ingredients list
  const ingredientsList = document.createElement("ul");
  ingredientsArray.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ingredientsList.className = "ingredients-list";
    ingredientsList.appendChild(li);
  });
  // Create instructions list
  const instructionsList = document.createElement("ol");
  instructionsArray.forEach((instruction) => {
    const li = document.createElement("li");
    li.textContent = instruction;
    instructionsList.className = "instructions-list";
    instructionsList.appendChild(li);
  });
  // Add everything to the card

  card.innerHTML += ` <h4 class="recipe-title">${recipe.title}</h4>`;
  card.innerHTML += `<h4 class="recipe-section">Ingredients</h4>`;
  card.appendChild(ingredientsList);
  card.innerHTML += `<h4 class="recipe-section">Instructions</h4>`;
  card.appendChild(instructionsList);
  card.innerHTML += `<div class="recipe-actions ">
                        <button class="btn-edit btn">Edit</button>
                        <button class="btn-delete btn">Delete</button>
                    </div>`;
  recipeContainer.appendChild(card);
}

function displayRecipes() {
  recipeContainer.innerHTML = "";
  recipes.forEach((recipe) => {
    addRecipe(recipe);
  });
  editRecipe();
  deleteRecipe();
}

displayRecipes(); // Call the function to display the recipes on page load

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const newRecipe = {
    title: recipeTitle.value,
    ingredients: recipeIngredients.value,
    instructions: recipeInstructions.value,
  };

  if (
    title.value.trim() === "" ||
    recipeIngredients.value.trim() === "" ||
    recipeInstructions.value.trim() === ""
  ) {
    alert("Please fill in all fields before submitting the recipe.");
    return;
  }
  if (isEditing){
    recipes[editIndex] = newRecipe;
    isEditing = false;
    editIndex = 0;

  }else{
    recipes.push(newRecipe);
    
  }
  displayRecipes();
  // Clear form fields after submission
  submitButton.textContent= "Add recipe";
  recipeTitle.value = "";
  recipeIngredients.value = "";
  recipeInstructions.value = "";
});

let isEditing = false;
let editIndex = -1;
function editRecipe() {
  // Function to edit a recipe at the given index
  const editButton = document.querySelectorAll(".btn-edit");

  editButton.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        isEditing = true;
        editIndex = i;
        submitButton.textContent= "Save recipe";
      recipeTitle.value = recipes[i].title;
      recipeIngredients.value = recipes[i].ingredients;
      recipeInstructions.value = recipes[i].instructions;
    });
  });
}
function deleteRecipe() {
    const deleteButton = document.querySelectorAll(".btn-delete");

    deleteButton.forEach((btn, i) =>{
        btn.addEventListener("click", () => {
            recipes.splice(i, 1);
            console.log(recipes);
            displayRecipes();
        })
    })
}
