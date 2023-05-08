import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import { Search } from './components/Search.js';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
    fetchPokemon();
  }, []);

  return (
    <div data-testid='app'>
      <Navigation />
      <Search />

      <Container>
        <Row xs={2} md={6} lg={10}>
          {data.map((pokemon, indx) => {
            return (
              <Col key={indx}>
                <PokemonCard key={indx} pokemon={pokemon} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export { App };
