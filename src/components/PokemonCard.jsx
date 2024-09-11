import { useEffect, useState } from "react";
import "./PokemonCard.css"





export let Card = ({key,Data})=>{
    
    let [pokemon,setPokemon] = useState(null);
    useEffect(()=>{
        fetch(Data)
        .then((response)=>response.json())
        .then((res)=>setPokemon(res))
        .catch((err)=>console.log(err))
    },[Data])
    if(pokemon){
        // console.log(name,pokemon)
        return(
            <li key={key}>
                 <img src={pokemon.sprites.other.dream_world.front_default ?? pokemon.sprites.other.home.
                         front_default} alt="" />
                     <h2 className="name">{pokemon.name}</h2>
                     <h3 className="type">
                         <span>{pokemon.types[0].type.name}</span>
                     </h3>
                     <div className="abilities">
                         <p>Height:{pokemon.height}</p>
                         <p>Weight:{pokemon.weight}</p>
                         <p>Speed:{pokemon.stats[5].base_stat}</p>
                     </div>
            </li>
        )
    }
}


