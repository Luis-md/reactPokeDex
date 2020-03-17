import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar from './components/layout/navbar/Navbar'
import Pokemons from './components/pokemons/Pokemons'

import './App.css';

function App() {

  const [pokes, setPokemon] = useState([])
  const [hasNext, setNext] = useState(null)
  const [hasPrevious, setPrevious] = useState(null) 
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    let pokeArray = []
    async function fetchData() {
      const result = await axios("https://pokeapi.co/api/v2/pokemon")
      setNext(result.data.next)
      setPrevious(result.data.previous)
      async function fetchPokemons () {
        result.data.results.map( poke => {
          const pokemon = axios(`${poke.url}`).then(request => {
              let newPoke = {
                name: request.data.forms[0].name,
                image: request.data.sprites.front_default
              }
              pokeArray.push(newPoke)
              setPokemon(pokeArray)
            }) 
        })
      }
      fetchPokemons()
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Pokemons pokeArray={pokes}/>
    </div>
  );
}

export default App;
