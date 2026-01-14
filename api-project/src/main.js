import "./style.css";

const URL = "https://wizard-world-api.herokuapp.com/Ingredients";
let ingredients = [];

function inject(item) {
  const entriesContainer = document.querySelector(".api-response");

  entriesContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h1>${item.name}</h1>
    </div>`
  );
}

async function getData(URL) {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    ingredients = data;

    document.querySelector(".api-response").innerHTML = "";
    ingredients.forEach(inject);

    setupSearch();
  } catch (error) {
    console.log("Failed to Load", error);
  }
}

function setupSearch() {
  const form = document.querySelector("#search-form");
  const input = document.querySelector(".search-input2");
  const results = document.querySelector(".api-response");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const searchTerm = input.value.trim().toLowerCase();

    if (!searchTerm) {
      results.innerHTML = "<p>Please enter an ingredient name.</p>";
      return;
    }

    results.innerHTML = "<p>Searching...</p>";

    const filtered = ingredients.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    results.innerHTML = "";

    if (filtered.length === 0) {
      results.innerHTML = "<p>No matching ingredients found.</p>";
      return;
    }

    filtered.forEach(inject);
  });
}

getData(URL);

