import PokeCard from "../../components/PokeCard"
import { useState, useEffect } from 'react'
import { getPokemons } from '../../dependencies/apiCall'

function Home({ quantPokes }) {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons(quantPokes)
        .then(response => {
            setPokemons(response.results)
        })
    }, [quantPokes])

    return (
        <>

            {pokemons.map(pokemon => {
                return <PokeCard key={pokemon.name} name={pokemon.name} />
            })}

        </>
    )
}

export default Home;