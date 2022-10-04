import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'

function PokemonCard({ url, name }) {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch(url).then((res) => res.json()).then((data) => setPokemon(data))
  })


  return (
    <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img src={pokemon?.sprites.front_default}>

          </Card.Img>
          <Card.Body>
            <Card.Title>
              {name}
            </Card.Title>
            <Card.Text>
              <ul>
              {pokemon?.abilities.map((ability) => 
              <li>{ability.ability.name}</li>)}
              </ul>
            </Card.Text>
          </Card.Body>
          </Card>
    </div>
  );
}

export { PokemonCard };
