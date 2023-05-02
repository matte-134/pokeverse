import React, { useState, useEffect } from 'react';
function PokemonCard({ name, url }) {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { sprites, abilities } = data;
        setPokemonData({ sprites, abilities });
      })
      .catch(error => console.log(error));
  }, [url]);
  if (!pokemonData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>{name}</h3>
      <img src={pokemonData.sprites.front_default} alt={name} />
      <ul>
        {pokemonData.abilities.map(ability => (
          <li key={ability.slot}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
}
export { PokemonCard };