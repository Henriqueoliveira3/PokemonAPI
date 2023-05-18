function searchPokemon(){
    const pokemonId = document.getElementById('greenScreen').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(response => response.json())
    .then(data => {
        const name = data.name; // Extrai o nome do Pokemon do objeto JSON
        const type = data.types[0].type.name; // Extrai o primeiro tipo do Pokemon
        const ability = data.abilities[0].ability.name; // Extrai a primeira habilidade do Pokemon

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