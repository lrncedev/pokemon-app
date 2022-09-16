document.querySelector('#search').addEventListener('click', getPokemon);


function getPokemon(e) {
  const pokemonName = document.querySelector('#pokemonName').value;
  const pokemonCard = document.querySelector('.pokemon');
  // pokemonCard.style.display = 'block';
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.querySelector('.pokemon').innerHTML = `
        <div class="pokemonCard">
          <h1>Pokemon Name: ${data.name}</h1>
          <h2>Type: ${data.types[0].type.name}</h2>
          <h2>Height: ${data.height}m</h2>
          <h2>Weight: ${data.weight}Kg</h2>
        </div>
        <div class="pokemonDex">
          <div class="pokemonImage">
            <img src="${data.sprites.front_default}" alt="${data.name} Image">
            <h1 style="color: white">${data.name}</h1>
          </div>
          <div>
            <h2>Abilities: ${data.abilities[0].ability.name}</h2>
            <h2>Base Exp: ${data.base_experience}</h2>
          </div>
        </div>
        `;
      })
    .catch((err) => {
      console.log(err);
    })

  e.preventDefault();
}

// getPokemon();