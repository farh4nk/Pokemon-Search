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
const imgContainer = document.getElementById("img-container");

searchButton.onclick = search;
searchInput.addEventListener('keypress', e => {
    if (e.key == "Enter") search();
})

async function search() {
    const poke = searchInput.value;
    
    const pokemonUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${poke}`;
    try {
        const response = await fetch(pokemonUrl);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        pokemonName.innerText = data['name'].toUpperCase();
        pokemonId.innerText = data['id'];
        weight.innerText = data['weight'] + 'lbs';
        height.innerText = data['height'];
        imgContainer.innerHTML = `<img id="sprite" src="${data['sprites']['front_default']}">`;
        types.innerHTML = ''
        data['types'].forEach(element => {
            types.innerHTML += `<p style="display:inline; border-radius: 11%; padding: 0.2rem;" id="${element['type']['name']}">${element['type']['name'].toUpperCase()}</p>`;
        });
        hp.innerText = data['stats'][0]['base_stat'];
        attack.innerText = data['stats'][1]['base_stat'];
        defense.innerText = data['stats'][2]['base_stat'];
        specialAttack.innerText = data['stats'][3]['base_stat'];
        specialDefense.innerText = data['stats'][4]['base_stat'];
        speed.innerText = data['stats'][5]['base_stat'];

    } 
    
    catch (err) {
        console.log(err.message);
        alert("Pokémon not found");
    }

    

}



