import React, { useEffect, useState } from 'react';
import {Card} from 'react-bootstrap';
import squirtle from '../../public/squirtle.png'
// import loadingChimecho from '../../public/loadingChimecho.gif';
// import cool from '../../public/cool.jpeg'

function PokemonCard({pokemon, getPokemon}) {
  const defaultPokeData = {data:{sprites:{front_default:""}},loading: true};
  const [pokeData, setPokeData] = useState(defaultPokeData);
  const {name, url} = pokemon;

  async function getPokemon(){
    try{
      const response = await fetch(url);
      const data = await response.json();
      setPokeData({data:data,loading:false});
    }catch(error){
      throw new Error(error);
    }
  }
  
  useEffect(() => {getPokemon()},[]);

  if(pokeData.loading) {
    return (
      <Card className='mt-4'>
      <Card.Img className="d-flex justify-content-center" variant="top" src={squirtle}/>
      <Card.Body>
        <Card.Title className='text-center'>loading pokemon..</Card.Title>
          <Card.Text as="div">
              <ul>Thinking</ul>
              <ul>Fetch</ul>
          </Card.Text>
      </Card.Body>
    </Card>
    );
   } else{
    return (
      <Card className='mt-4'>
        <Card.Img className="d-flex justify-content-center" variant="top" src={pokeData.data.sprites.front_default}></Card.Img>
        <Card.Body>
          <Card.Title className='text-center'>{name}</Card.Title>
            <Card.Text as="div">
                {pokeData.data.abilities.map((ability,index) => {
                  console.log(ability.ability.name)
                  return <ul key={index}>{ability.ability.name}</ul>
              })}
            </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  }

export { PokemonCard };
