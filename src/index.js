console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);
console.log(data[0].name);

const UL = document.querySelector("ul");

const CARD = document.createElement("li");
CARD.className = "card";

UL.appendChild(CARD);

const LI = document.createElement("li");

let test = Object.values(data[0])[4];

console.log(test);

console.log(data[0]);

// LI.textContent = bruh[0];

// CARD.appendChild(LI);
