async function getPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
}

function updatePokemon(pokemon) {
    window.photo.setAttribute('src', pokemon.sprites.front_default);
    window.pokemon.textContent = pokemon.name;    
}

window.searchPokemon.addEventListener('change', async () => {
    const pokemon = await getPokemon(window.searchPokemon.value);
    updatePokemon(pokemon);
})