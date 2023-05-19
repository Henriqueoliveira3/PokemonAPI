const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click',() => {
    const pokemonId = document.getElementById('greenScreen').value;
    searchPokemon(pokemonId);
})

function searchPokemon(pokemonId){
    if (pokemonId <= 0 || pokemonId > 1010) {
        pokemonName.innerHTML = 'No data!';
        const pokemonType = document.getElementById('pokemonType');
        pokemonType.innerHTML = ''; 
        const pokemonSkill = document.getElementById('pokemonSkill');
        pokemonSkill.innerHTML = '';
        const a = document.getElementById('pokemonImage');
        a.setAttribute('src', '');
        a.style.display = 'none';
    }else{
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(data => {
            const name = data.name; // Extrai o nome do Pokemon do objeto JSON
            const type = data.types[0].type.name; // Extrai o primeiro tipo do Pokemon
            const ability = data.abilities[0].ability.name; // Extrai a primeira habilidade do Pokemon
            getPokemonImage(pokemonId);
            // Exibe as informações do Pokemon no console
            const pokemonName = document.getElementById('pokemonName');
            pokemonName.innerHTML = `Pokemon name: ${name}`; 
            const pokemonType = document.getElementById('pokemonType');
            pokemonType.innerHTML = `Pokemon type: ${type}`; 
            const pokemonSkill = document.getElementById('pokemonSkill');
            pokemonSkill.innerHTML = `Pokemon ability: ${ability}`; 
        })
        .catch(error => console.error(error));
    }
}

function getPokemonImage(pokemonId){
    const a = document.getElementById('pokemonImage');
    a.style.display = 'block';
    a.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`);

}