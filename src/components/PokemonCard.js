import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import squirtle from '../../public/squirtle.png';
// import loadingChimecho from '../../public/loadingChimecho.gif';
// import cool from '../../public/cool.jpeg'

function PokemonCard({ pokemon }) {
  const defaultPokeData = {
    // eslint-disable-next-line camelcase
    data: { sprites: { front_default: '' } },
    loading: true,
  };
  const [pokeData, setPokeData] = useState(defaultPokeData);
  const { name, url } = pokemon;

  useEffect(() => {
    async function getPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokeData({ data: data, loading: false });
      } catch (error) {
        // You don't need to create a new error here as it would be redundant
        // If we hit the catch block, an error has already been thrown, and you just need to handle it
        console.error(error.message);
      }
    }
    getPokemon();
  }, [url]);

  if (pokeData.loading) {
    return (
      <Card className='mt-4'>
        <Card.Img
          className='d-flex justify-content-center'
          variant='top'
          src={squirtle}
        />
        <Card.Body>
          <Card.Title className='text-center'>loading pokemon..</Card.Title>
          <Card.Text as='div'>
            <ul>Thinking</ul>
            <ul>Fetch</ul>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className='mt-4'>
      <Card.Img
        className='d-flex justify-content-center'
        variant='top'
        src={pokeData.data.sprites.front_default}
      ></Card.Img>
      <Card.Body>
        <Card.Title className='text-center'>{name}</Card.Title>
        <Card.Text as='div'>
          <ul>
            {pokeData.data.abilities.map((ability, index) => {
              return <li key={index}>{ability.ability.name}</li>;
            })}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export { PokemonCard };
