import { createContext, useState } from "react";
import { useEffect } from "react";

export let ContextComp = createContext();


export let ProviderComp = ({children})=>{
    let [pokemon,setPokemonData] = useState(null);
    // fetching Data
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=124")
        .then((response)=>response.json())
        .then((res)=>setPokemonData(res.results))
        .catch((err)=>console.log('error',err))
    },[])
    if(pokemon){
    return <ContextComp value={pokemon.map((cur)=>cur)}>
        {children}
    </ContextComp>

    }
}