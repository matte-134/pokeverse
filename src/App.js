import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { CardGrid } from './components/CardGrid';
import { Search } from './components/Search';
import { useEffect } from 'react';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [data, setData] = useState([]);

  async function fetchPokemon() {
    try {
      const request = await fetch(pokeApi);
      const result = await request.json();
      setData(result.results); // await resolves a Promise, so since you're not doing this here, no need to use await
    } catch (error) {
      // You don't need to create a new error here as it would be redundant
      // If we hit the catch block, an error has already been thrown, and you just need to handle it
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchPokemon()
  }, []);
  
  return (
    <div data-testid='app'>
      <Navigation />
      {/* <Search query={query} handleTyping={handleTyping} /> */}
      <CardGrid data={data} setData={setData} />
    </div>
  );
}

export { App };
