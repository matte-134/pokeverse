import React, { useState, useEffect } from ‘react’;
import { useParams } from ‘react-router-dom’;
import { Card, Row, Col } from ‘react-bootstrap’;
function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null);
  const params = useParams();
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
        const data = await res.json();
        console.log(‘data of pokemon’, data);
        setPokemon(data);
      } catch (error) {
        console.log(error);
        setPokemon(null);
      }
    };
    fetchPokemon();
  }, [params.name]);
  if (!pokemon) {
    return <>Loading...</>;
  }
  const { sprites, height, weight, abilities, types, stats } = pokemon;
  const imgStyle = {
    width: ‘15em’,
    height: ‘15em’,
  };
  const nameStyle = {
    textDecoration: ‘none’,
    fontWeight: ‘bold’,
    fontSize: ‘24px’,
    marginTop: ‘10px’,
    marginBottom: ‘10px’,
  };
  return (
    <div>
      <Card border=“light” className=“border-0">
        <Card.Img variant=“top” src={sprites.front_default} style={imgStyle} alt={pokemon.name} />
        <Card.Body className=“p-0">
          <Card.Title style={nameStyle}>{pokemon.name.toLowerCase()}</Card.Title>
          <Row>
            <Col sm={12}>
              <Card.Text>
                <strong>Height:</strong> {height}
              </Card.Text>
              <Card.Text>
                <strong>Weight:</strong> {weight}
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Card.Text>
                <strong>Abilities:</strong>
                <ul>
                  {abilities.map((ability) => (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                  ))}
                </ul>
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Card.Text>
                <strong>Types:</strong>
                <ul>
                  {types.map((type) => (
                    <li key={type.type.name}>{type.type.name}</li>
                  ))}
                </ul>
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Card.Text>
                <strong>Stats:</strong>
                <ul>
                  {stats.map((stat) => (
                    <li key={stat.stat.name}>
                      {stat.stat.name}: {stat.base_stat}
                    </li>
                  ))}
                </ul>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
export { PokemonDetails };