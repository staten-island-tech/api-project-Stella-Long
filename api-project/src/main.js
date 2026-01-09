let data = [
  {
    id: "",
    name: "",
    effect: "",
  },
];

const apiURL = "https://wizard-world-api.herokuapp.com/Ingredients";

async function getData(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      const spells = data;
      const container = document.querySelector(".container");
      function showSpells(list) {
        container.innerHTML = "";
        list.forEach((spell) => {
          container.insertAdjacentHTML(
            "afterbegin",
            `
              <div id = "cards" class = " m-8 p-8 border-4 border-sky-900 bg-gray-200">
              <div id="name" class ="font-bold underline underline-offset-4">${spell.name}</div>
              <div id="id">Id: ${spell.id}</div>
            `
          );
        });
      }
      showSpells(spells);
      function filter(input) {
        const search = input.toLowerCase();
        container.innerHTML = "";
        spells.forEach((spell) => {
          const searchName = spell.name.toLowerCase();
          if (searchName.includes(search)) {
            container.insertAdjacentHTML(
              "afterbegin",
              `
                            <div id = "cards" class = " m-8 p-8 border-4 border-sky-900 bg-gray-200">
                                <div id="name" class ="font-bold underline underline-offset-4">${spell.name}</div>
                                <div id="id">Id: ${spell.id}</div>
                            </div>    
                            `
            );
          }
        });
      }
      document
        .querySelector("#search input")
        .addEventListener("input", (event) => {
          filter(event.target.value);
        });
    }
  } catch (error) {
    console.log(error);
  }
}
getData(apiURL);
