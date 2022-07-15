import axios from "axios";

export const getPokemons = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export const getPokemonDetails = (pokemon) => {
  return axios
    .get(pokemon)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("error", error);
    });
};
