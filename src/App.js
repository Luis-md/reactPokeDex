import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar from './components/layout/navbar/Navbar'
import Pokemons from './components/pokemons/Pokemons'

import './App.css';

function App() {
  const [pokeCall, setPokeCall] = useState([])
  const [pokes, setPokemon] = useState([])
  const [hasNext, setNext] = useState(null)
  const [hasPrevious, setPrevious] = useState(null) 
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    async function fetchData() {
      const result = await axios("https://pokeapi.co/api/v2/pokemon")
      setNext(result.data.next)
      setPrevious(result.data.previous)
      setPokeCall(result.data.results)
      }
    fetchData()
  }, [])

  const fetchPokesHandler = async () => {
    setLoading(true)
    let newPokeArray = await axios.all(pokeCall.map( e => axios.get(e.url)))

    setPokemon(newPokeArray)
    setLoading(false)
  }

  const info = pokes.length === 0 ? 
  <div>
    <h1 className="welcome">Welcome to pokedex!</h1> 
    <button className="btn next round" onClick={fetchPokesHandler}> Fetch data</button>
  </div> : 
  <div>
      <button disabled={hasPrevious != null ? false : true} className="btn next round">Previous</button> 
      <button disabled={hasNext != null ? false : true} className="btn next round">Next</button> 
  </div>
  return (
    
    <div className="App">

      <Navbar />
      <div className="container">

      <Pokemons pokeArray={pokes} loading={loading}/>

      <div className="align-center">
        {info}
      </div>
    </div>
  
    </div>
  );
}

export default App;
