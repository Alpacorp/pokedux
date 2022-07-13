import { Col } from "antd";
import { connect } from "react-redux";
import { useEffect } from "react";
import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";
import { getPokemons } from "./api";
import logo from "./statics/logo.svg";
import "./App.css";
import { setPokemonsActions } from "./actions";

function App({ pokemons, setPokemons }) {
  console.log("pokemons App", pokemons);

  const fetchPokemons = async () => {
    const pokemonsRes = await getPokemons();
    setPokemons(pokemonsRes);
  };

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
