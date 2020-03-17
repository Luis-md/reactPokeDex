import React from 'react'
import Spinner from '../layout/spinner/Spinner'
import Pokemon from './Pokemon'
import './Pokemon.css'


const Pokemons = (props) => {
    if(props.loading) {
        return (
            <Spinner />
        )
    } else {
        return (
            <div className="pokeStyle">
                {props.pokeArray.map(poke => (
                    <Pokemon poke={poke} key={poke.data.id}/>   
                ))}
            </div>
        )
    }
}

export default Pokemons