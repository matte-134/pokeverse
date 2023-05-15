import React, {useState,useEffect} from "react";

function Home(){
    const [data, setData] = useState([]);

    async function fetchPokemon() {
      try {
        const request = await fetch(pokeApi);
        const result = await request.json();
        setData(result.results);
      } catch (error) {
        console.error(error.message);
      }
    }
  
    useEffect(() => {
      fetchPokemon()
    }, []);
  
    return (
        <CardGrid data={data} setData={setData} />
    );
}