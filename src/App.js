import { Col } from "antd";
import { useEffect } from "react";
import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";
import { getPokemons } from "./api";
import logo from "./statics/logo.svg";
import "./App.css";
import { setPokemonsActions } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();

  console.log("pokemons App", pokemons);

  const fetchPokemons = async () => {
    const pokemonsRes = await getPokemons();
    dispatch(setPokemonsActions(pokemonsRes));
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

export default App;
