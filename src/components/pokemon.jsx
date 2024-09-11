import { Card } from "./PokemonCard";
import { useEffect, useState } from "react"
import "./pokemon.css"



export const Home = ()=>{
  // Input Value
    let [inputVal,setInputVal]  = useState("");
    // Set Api.results Data Into variable
    let [pokemonData,setPokemonData] = useState(null);
    // Loading functionality
    let [Loading,setLoading] = useState(true);
    // Fetching Data
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=124")
        .then((response)=>response.json())
        .then((res)=>setPokemonData(res.results))
        .then(()=>setLoading(false))
        .catch((err)=>console.log('error',err))
    },[])
    if(Loading){
        return (<h1>Loading...</h1>)
    }
    if(pokemonData){
        let searchData = pokemonData.filter((cur)=>cur.name.toLowerCase().includes(inputVal))
    return(
        <div className="container">
            <div className="main">
            <h1>Let's Catch Pokemon</h1>
            <input type="text" value={inputVal} onChange={(e)=>setInputVal(e.target.value)}/>
            <div>
                <ul>
                    {searchData.map((curElem,index)=>{
                        return <Card key={index} Data={curElem.url} name={curElem.name}/>
                    })}
                </ul>
            </div>
            </div>
        </div>
    )
}
}