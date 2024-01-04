// pokedex

// https://pokeapi.co/docs.v2

// create a page that displays 40 pokemon in cards by default
// each card should display an image, name, type
// for each card, if you click them it should open a dialogue that lists the abilities of that pokemon
// search bar that filters the list of cards that displays on the page

// extra time, get evolution chain of pokemon aswell

const filterSubmit = document.querySelector(".filter-form");
const filterInput = document.querySelector(".filter-form__input");

filterSubmit.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (filterInput.value.length > 2) {
    const filterValue = filterInput.value;
    const filteredArray = await getFilteredPokemon(filterValue);
    renderPokemon(filteredArray);
  } else alert("Search must be at least 3 characters long");
});

const getFilteredPokemon = async (filterValue) => {
  const pokemonResults = await fetchData(
    `https://pokeapi.co/api/v2/pokemon?limit=1025`
  );
  const pokemonList = pokemonResults.results;
  let filteredPokemon = pokemonList.reduce((acc, pokemon) => {
    if (pokemon.name.includes(filterValue) && acc.length < 40) {
      acc.push(pokemon);
    }
    return acc;
  }, []);
  return filteredPokemon;
};

const fetchData = async (url) => {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const getPokemonOnLoad = async () => {
  const data = await fetchData(`https://pokeapi.co/api/v2/pokemon?limit=40`);
  const pokemon = data.results;
  return pokemon;
};

const getPokemonTypeAbil = async (pokeList) => {
  let pokeTypesList = [];
  let pokeAbilitiesList = [];
  for (let i = 0; i < pokeList.length; i++) {
    const data = await fetchData(pokeList[i].url);
    // do types
    const types = data.types;
    const pokeTypes = types.map((type) => type.type.name);
    pokeTypesList.push(
      pokeTypes.length === 1 ? pokeTypes[0] : pokeTypes.join(" | ")
    );
    // do abilities
    const abilities = data.abilities;
    const pokeAbilities = abilities.map((ability) => ability.ability.name);
    pokeAbilitiesList.push(
      pokeAbilities.length === 1 ? pokeAbilities[0] : pokeAbilities.join(" | ")
    );
  }
  return [pokeTypesList, pokeAbilitiesList];
};

const renderPokemon = async (list) => {
  const container = document.querySelector(".pokemon-list");
  container.innerHTML = "...loading pokemon";

  // get list of pokemon
  const pokemonList = await list;

  // get pokemon types and abilities
  const pokeTypeAbil = await getPokemonTypeAbil(pokemonList);
  console.log(pokeTypeAbil);
  // extract types
  const pokeTypes = pokeTypeAbil[0];
  // extract abilities
  const pokeAbilities = pokeTypeAbil[1];

  // create pokemon cards
  class PokemonDisplay {
    constructor(name, types, image, abilities) {
      this.name = name;
      this.types = types;
      this.abilities = abilities;
      this.image = image;
    }

    createCard() {
      const borderDiv = document.createElement("div");
      borderDiv.classList.add("pokemon-list__border");

      const cardDiv = document.createElement("div");
      cardDiv.classList.add("pokemon-list__card");

      const nameP = document.createElement("p");
      nameP.classList.add("pokemon-list__card__name");
      nameP.textContent = capitalizeFirstLetter(this.name);

      const imageDiv = document.createElement("div");
      imageDiv.classList.add("pokemon-list__card__image");

      const image = document.createElement("img");
      image.classList.add("pokemon-list__card__image--img");
      image.src = this.image;

      const types = document.createElement("p");
      types.classList.add("pokemon-list__card__types");
      types.textContent = capitalizeFirstLetter(this.types);

      const abilities = document.createElement("div");
      abilities.classList.add("pokemon-list__card__abilities");

      const abilitiesText = document.createElement("p");
      abilitiesText.classList.add("pokemon-list__card__abilities--text");
      abilitiesText.textContent = capitalizeFirstLetter(this.abilities);

      abilities.appendChild(abilitiesText);
      imageDiv.appendChild(image);
      cardDiv.appendChild(nameP);
      cardDiv.appendChild(imageDiv);
      cardDiv.appendChild(types);
      cardDiv.appendChild(abilities);
      borderDiv.appendChild(cardDiv);

      const showAbilities = (event) => {
        event.stopPropagation();
        abilities.style.opacity = "1";
        cardDiv.removeEventListener("click", showAbilities);
        document.addEventListener("click", hideAbilities);
      };

      const hideAbilities = () => {
        abilities.style.opacity = "0";
        document.removeEventListener("click", hideAbilities);
        cardDiv.addEventListener("click", showAbilities);
      };

      cardDiv.addEventListener("click", showAbilities);

      return borderDiv;
    }
  }

  const pokemonCards = pokemonList.map((pokemon, ind) => {
    const pokeNum = pokemon.url.split("/")[6];
    const pokeDisplay = new PokemonDisplay(
      pokemon.name,
      pokeTypes[ind],
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNum}.png`,
      pokeAbilities[ind]
    );
    return pokeDisplay.createCard();
  });
  container.innerHTML = "";
  pokemonCards.forEach((card) => container.appendChild(card));
};

const capitalizeFirstLetter = (string) => {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

renderPokemon(getPokemonOnLoad());
