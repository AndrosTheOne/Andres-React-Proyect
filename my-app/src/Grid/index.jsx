import "./Grid.css"
import pokemon from "../pokedex.json"
import { Card } from "../Card"


export function Grid()
{
    return(
        
        <ul className="mainGrid">
            {pokemon.map((pokemon)=>(<Card key={pokemon.id} pokemon={pokemon}/>))}
        </ul>

    )
}


