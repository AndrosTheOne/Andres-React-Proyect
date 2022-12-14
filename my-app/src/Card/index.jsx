import "./Card.css"

export function Card({pokemon})
{
    return(

        <div className="Card">

            <img className="Image" src={pokemon.img} alt={pokemon.name} />

            <div className="Data">
                <p>Num#: {pokemon.num}</p>
                <p>Name: {pokemon.name}</p>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
            </div>
            
        </div>

    )
}