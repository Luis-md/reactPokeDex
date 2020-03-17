import React from 'react'
import './Pokemon.css'

const Pokemon = (props) => {
 
    const { name, sprites, id } = props.poke.data


    return (
        <div>
            <div className="ballUp"> 
                <img src={sprites.front_default} alt={name} />  
            </div>
            <div className="ballDown">
                <p>#{`${id}`}</p> 
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Pokemon;