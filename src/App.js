import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import Container from 'react-bootstrap/esm/Container';
import { useEffect } from 'react';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;



function App() {
  
  const [data, setData] = useState([]);

  async function fetchPokemon() {
    try {

      const request = await fetch(pokeApi);
      const result = await request.json();
      setData(await result.results);

    } catch(error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    fetchPokemon();
  },[])

  return (
    <div data-testid="app">
      <Navigation />

      <h1>Cards should appear here</h1>
      <Container>
        {data.map((pokemon,indx) => {
          return (<PokemonCard key={indx} pokemon={pokemon} />);
        })}
      </Container>
    </div>
  );
}

export { App };
