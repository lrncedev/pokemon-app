const initalList = 12;

const fetchPokemon = async () => {
  for (let i = 1; i <= initalList; i++){
    await getPokemon(i);
  }
}
const pokemonContainer = document.querySelector('#pokemon-result');

const getPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
}


function createPokemonCard(pokemon) {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');
  const results = `
    <div class="card-img">
      <img class='card-actual-img' src="${pokemon.sprites.front_default}" alt="Card image..">
    </div>
    <div class="card-description">
      <h1>${pokemon.name}</h1>
      <p>asds</p>
    </div>
  `;
  cardEl.innerHTML = results;
  pokemonContainer.appendChild(cardEl);
}

document.querySelector('#search').addEventListener('click', searchPokemon);

function searchPokemon(e) {
  const pokemonName = document.querySelector('#pokemonName').value;
  // console.log(name);
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then((response) => response.json())
  .then((pokemon) => {
    pokemonContainer.innerHTML = `
    <div class='card'>
      <div class="card-img">
        <img class='card-actual-img' src="${pokemon.sprites.front_default}" alt="Card image..">
      </div>
      <div class="card-description">
        <h1>${pokemon.name}</h1>
        <p>asds</p>
      </div>
    </div>
    `;
  })
  .catch(() => {
    let elementsLeft = pokemonContainer.lastElementChild;
    while (elementsLeft){
      pokemonContainer.removeChild(elementsLeft);
      elementsLeft = pokemonContainer.lastElementChild;
    }
    const errorMsg = document.createElement('p');
    errorMsg.innerHTML = `Ooops.. There's no such Pokemon in our API 😭`
    pokemonContainer.appendChild(errorMsg);
  })

  e.preventDefault();
}


window.addEventListener('DOMContentLoaded', fetchPokemon());