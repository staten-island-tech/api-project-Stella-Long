let data = [
  {
    id: "",
    name: "",
    alternate_names: "",
    species: "",
    gender: "",
    house: "",
    dateOfBirth: "",
    yearOfBirth: "",
    wizard: "",
    ancestry: "",
    eyeColour: "",
    hairColour: "",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "",
    hogwartsStudent: "",
    hogwartsStaff: "",
    actor: "",
    alternate_actors: "",
    alive: "",
    image: "",
  },
];

const apiUrl = "https://hp-api.onrender.com/api/characters";

async function getData(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      const characters = data;
      const container = document.querySelector(".container");
      characters.forEach((character) => {
        container.insertAdjacentHTML(
          "beforeend",
          `
          <div class = "cards">
          <h2>id: ${character.id}</h2>
          <h2>name: ${character.name}</h2>
          <h2>alternate_names: ${character.alternate_names}</h2>
          <h2>species: ${character.species}</h2>
          <h2>gender: ${character.gender}</h2>
          <h2>house: ${character.house}</h2>
          <h2>dateOfBirth: ${character.dateOfBirth}</h2>
          <h2>yearOfBirth: ${character.yearOfBirth}</h2>
          <h2>wizard: ${character.wizard}</h2>
          <h2>ancestry: ${character.ancestry}</h2>
          <h2>eyeColor: ${character.eyeColour}</h2>
          <h2>hairColor: ${character.hairColour}</h2>
          <h2>wand: ${character.wand}</h2>
          <h2>patronus: ${character.patronus}</h2>
          <h2>hogwartsStudent: ${character.hogwartsStudent}</h2>
          <h2>hogwartsStaff: ${character.hogwartsStaff}</h2>
          <h2>actor: ${character.actor}</h2>
          <h2>alterante_actor: ${character.alternate_actors}</h2>
          <h2>alive: ${character.alive}</h2>
          <h2>image: ${character.image}</h2>
          </div>
        `
        );
      });
    }
  } catch (error) {
    console.log(error);
  }
}
getData(apiUrl);
