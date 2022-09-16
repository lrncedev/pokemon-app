const initalList = 20;

const fetchPokemon = async () => {
  for (let i = 1; i <= initalList; i++){
    await getPokemon(i);
  }
}

const getPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  console.log(pokemon);
  createPokemonCard(pokemon);
}

fetchPokemon();

function createPokemonCard(pokemon) {
  const cardEl = document.querySelector('#pokemon-result');
  const results = `
  <div class="card">
    <div class="card-img">
      <img class='card-actual-img' src="${pokemon.sprites.front_default}" alt="Card image..">
    </div>
    <div class="card-description">
      <h1>${pokemon.name}</h1>
      <p>test value</p>
    </div>
  </div>
  `;
  console.log(results);
  cardEl.innerHTML += results;
}