import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Card, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';
const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;
function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    fetch(pokeApi)
      .then(response => response.json())
      .then(data => setPokemonList(data.results))
      .catch(error => console.log(error));
  }, []);
  useEffect(() => {
    const promises = pokemonList.map(pokemon =>
      fetch(pokemon.url)
        .then(response => response.json())
        .catch(error => console.log(error))
    );
    Promise.all(promises)
      .then(results => setPokemonData(results))
      .catch(error => console.log(error));
  }, [pokemonList]);
  const filteredPokemon = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };
  return (
    <Container fluid>
      <Navigation />
      <Row className="justify-content-center mt-0 mb-4">
        <Col md={6}>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
            <FormControl
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="justify-content-center mt-0">
        {filteredPokemon.map(pokemon => (
          <Col md={3} className="mb-4" key={pokemon.id}>
            <Card className="pokemon-card h-100">
              {pokemon.sprites && pokemon.sprites.front_default && (
                <Card.Img variant="top" src={pokemon.sprites.front_default} />
              )}
              <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
                <Card.Text>
                  <strong>Abilities:</strong>
                  {pokemon.abilities && (
                    <ul className="pl-3 mb-0">
                      {pokemon.abilities.map(ability => (
                        <li key={ability.slot}>{ability.ability.name}</li>
                      ))}
                    </ul>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export { App };