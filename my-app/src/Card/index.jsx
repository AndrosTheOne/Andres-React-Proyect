import "./Card.css"
//export function Card({pelicula})
//{

    //const imgUrl = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path

    //return(

        //<li className="Card">
        //<img className="Image" src={imgUrl} alt={pelicula.title} />
        //<div>{pelicula.title}</div>
        //<div>{pelicula.popularity}</div>
        //</li>

    //)

//}
export function Card({pokemon})
{

    //const imgUrl = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path

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