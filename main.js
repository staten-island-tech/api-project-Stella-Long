let data = [
  {
    id: "",
    name: "",
    incantation: "",
    effect: "",
    canBeVerbal: "",
    type: "",
    light: "",
    creator: "",
  },
];

const apiUrl = "https://wizard-world-api.herokuapp.com/Spells";

async function getData(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      const spells = data;
      const container = document.querySelector(".container");
      spells.forEach((spell) => {
        container.insertAdjacentHTML(
          "beforeend",
          `
          <div class = "cards">
          <h2>id: ${spell.id}</h2>
          <h2>name: ${spell.name}</h2>
          <h2>incantation: ${spell.incantation || "None"}</h2>
          <h2>effect: ${spell.effect}</h2>
          <h2>is it verbal?: ${spell.canBeVerbal || "No"}</h2>
          <h2>spell type: ${spell.type}</h2>
          <h2>color: ${spell.light}</h2>
          <h2>creator: ${spell.creator}</h2>
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
