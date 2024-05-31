console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

const UL = document.querySelector("ul");

const CARD = document.createElement("li");
CARD.className = "card";

const POKEMON_TITLE_H2 = document.createElement("h2");

function pokemonGetName(dataIndex) {
  let POKEMON_NAME = Object.values(data[dataIndex])[0];
  POKEMON_TITLE_H2.textContent =
    POKEMON_NAME.charAt(0).toUpperCase() + POKEMON_NAME.slice(1);
  return POKEMON_TITLE_H2;
}

for (let i = 0; i < data.length; i++) {
  CARD.appendChild(pokemonGetName(i));
  UL.appendChild(CARD.cloneNode(true));
}
