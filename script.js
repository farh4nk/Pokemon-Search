const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

searchButton.onclick = search;

const url = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';
try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
}

catch (err) {
    alert(err.message);
}

function search() {

}