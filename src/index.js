// console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
// console.log(data[0]);

const UL = document.querySelector("ul");

const CARD_LI = document.createElement("li");
CARD_LI.className = "card";

const CARD_TEXT_UL = document.createElement("ul");
CARD_TEXT_UL.className = "card--text";

const LI = document.createElement("li");

const POKEMON_TITLE_H2 = document.createElement("h2");
POKEMON_TITLE_H2.className = "card--title";

function pokemonGetName(dataIndex) {
  let pokemonName = Object.values(data[dataIndex])[0];
  POKEMON_TITLE_H2.textContent =
    pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
  return POKEMON_TITLE_H2;
}

function pokemonGetStats(dataIndex) {
  let pokemonStat = data[dataIndex].stats;
  CARD_TEXT_UL.innerHTML = "";
  for (let i = 0; i < pokemonStat.length; i++) {
    LI.textContent =
      pokemonStat[i].stat.name.toUpperCase() + ": " + pokemonStat[i].base_stat;
    CARD_TEXT_UL.appendChild(LI.cloneNode(true));
  }
  return CARD_TEXT_UL;
}

for (let i = 0; i < data.length; i++) {
  CARD_LI.appendChild(pokemonGetName(i));
  CARD_LI.appendChild(pokemonGetStats(i));
  UL.appendChild(CARD_LI.cloneNode(true));
}
