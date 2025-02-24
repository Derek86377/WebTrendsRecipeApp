import {
  db,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  initializeApi,
  model,
} from "./firebaseConfig";

let genAI, model, apiKey;

initializeApi()
  .then(() => {
    if (model) {
      console.log("Model is ready to use.");
    } else {
      console.log("Model not initialized.");
    }
  })
  .catch((error) => {
    console.error("Error initializing API or model:", error);
  });

document.addEventListener("DOMContentLoaded", () => {
  fetchRecipes();

  const addButton = document.getElementById("addButton");
  if (addButton) {
    addButton.addEventListener("click", addRecipe);
  }

  const fetchButton = document.getElementById("fetchButton");
  if (fetchButton) {
    fetchButton.addEventListener("click", fetchRecipes);
  }

  const recipeList = document.getElementById("recipeList");
  if (recipeList) {
    recipeList.addEventListener("click", (e) => {
      if (e.target && e.target.classList.contains("delete-btn")) {
        const recipeId = e.target.getAttribute("data-id");
        deleteRecipe(recipeId);
      }
    });
  }
});

const addRecipe = async () => {
  const title = document.getElementById("recipeTitle").value;
  const ingredients = document.getElementById("recipeIngredients").value;
  const instructions = document.getElementById("recipeInstructions").value;

  if (title && ingredients && instructions) {
    try {
      const recipeRef = collection(db, "recipes");
      await addDoc(recipeRef, {
        title,
        ingredients,
        instructions,
      });
      alert("Recipe added successfully!");
      fetchRecipes();
      clearInputFields();
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  } else {
    alert("Please fill in all fields!");
  }
};

const fetchRecipes = async () => {
  const recipeList = document.getElementById("recipeList");
  recipeList.innerHTML = "";

  try {
    const recipeRef = collection(db, "recipes");
    const snapshot = await getDocs(recipeRef);
    snapshot.forEach((doc) => {
      const recipe = doc.data();
      const recipeItem = document.createElement("li");
      recipeItem.innerHTML = `
                <h3>${recipe.title}</h3>
                <p>Ingredients: ${recipe.ingredients}</p>
                <p>Instructions: ${recipe.instructions}</p>
                <button class="delete-btn" data-id="${doc.id}">Delete</button>
            `;
      recipeList.appendChild(recipeItem);
    });
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

const deleteRecipe = (id) => {
  const recipeRef = doc(db, "recipes", id);
  deleteDoc(recipeRef)
    .then(() => {
      console.log(`Recipe with ID ${id} deleted`);
      fetchRecipes();
    })
    .catch((error) => {
      console.error("Error deleting recipe:", error);
    });
};

const clearInputFields = () => {
  document.getElementById("recipeTitle").value = "";
  document.getElementById("recipeIngredients").value = "";
  document.getElementById("recipeInstructions").value = "";
};

const aiButton = document.getElementById("send-btn");
const aiInput = document.getElementById("chat-input");
const chatHistory = document.getElementById("chat-history");

function appendMessage(message) {
  let history = document.createElement("div");
  history.textContent = message;
  history.className = "history";
  chatHistory.appendChild(history);
  aiInput.value = "";
}

async function handleUserInput() {
  let prompt = aiInput.value.trim().toLowerCase();
  if (prompt) {
    if (prompt.startsWith("add recipe")) {
      let task = prompt.replace("add recipe", "").trim();
      if (task) {
        addTask(task);
        appendMessage(`Recipe "${task}" added!`);
      } else {
        appendMessage("Please specify a recipe to add.");
      }
    } else if (prompt.startsWith("complete")) {
      let taskName = prompt.replace("complete", "").trim();
      if (taskName) {
        appendMessage(`Recipe "${taskName}" marked as complete.`);
      } else {
        appendMessage("Please specify a recipe to complete.");
      }
    } else {
      const response = await askChatBot(prompt);
      appendMessage(response);
    }
  } else {
    appendMessage("Please enter a prompt.");
  }
}

aiButton.addEventListener("click", async () => {
  await handleUserInput();
});

async function askChatBot(request) {
  if (!model) {
    console.error("Model not initialized.");
    return "AI model not initialized.";
  }

  try {
    const response = await model.generateContent(request);

    if (response && response.candidates && response.candidates.length > 0) {
      return await response.candidates[0].text();
    } else {
      return "This Generative Language API is the only ~chatbot~ I was able to find and utilize but otherwise fully functional";
    }
  } catch (error) {
    console.error("Error interacting with AI:", error);
    return "Sorry, there was an issue with the AI request.";
  }
}
