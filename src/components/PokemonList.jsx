import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  // console.log("pokemons inner", pokemons[0].sprites.front_default);
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        console.log("pokemon map", pokemon.sprites.front_default);
        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            img={pokemon.sprites.front_default}
            abilities={pokemon.abilities}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
