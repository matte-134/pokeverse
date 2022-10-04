import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    fetch(pokeApi).then((res) => res.json()).then((data) => setPokemonList(data.results))
  });

  console.log(pokemonList);

  return (
    <div data-testid="app">
      <Navigation />

      <h1>Pokemon should appear here</h1>
      {pokemonList.map((pokemon) => <PokemonCard url={pokemon.url} name={pokemon.name}/>)}
      <PokemonCard />
      
    </div>
  );
}

export { App };
