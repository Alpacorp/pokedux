export const logger = (store) => (next) => (action) => {
  console.log("action", action);
  console.log("store", store.getState());
  next(action);
};

export const featuring = (store) => (next) => (action) => {
  const addPokemon = [{ name: "Alejo Palacios" }, ...action.action.payload];
  const updatePokemons = {
    ...action,
    action: { ...action.action, payload: addPokemon },
  };
  next(updatePokemons);
};
