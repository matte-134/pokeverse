import React, { useEffect, useState } from 'react';
import {Card} from 'react-bootstrap';

function PokemonCard({pokemon, getPokemon}) {
  const defaultPokeData = {data:{sprites:{front_default:""}},loading: true};
  const [pokeData, setPokeData] = useState(defaultPokeData);
  const {name, url} = pokemon;

  async function getPokemon(){
    try{
      const response = await fetch(url);
      const data = await response.json();
      setPokeData({data:data,loading: false});
    }catch(error){
      throw new Error(error);
    }
  }
  
  useEffect(() => {getPokemon()},[]);

  if(pokeData.loading) {
    return <><p>Loading...</p></>
  }else{
    return (
      <Card>
        <Card.Img variant="top" src={pokeData.data.sprites.front_default}></Card.Img>
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
  }

export { PokemonCard };
