import { useState } from "react"
import { useCallback, useEffect } from "react/cjs/react.development"

function PokemonSearchForm({ sourcePokemonList, setPokemons, listSize }) {
    // useCallback(() => {
    //     function handleSearch(input) {
    //         setSearchedPoke(input.value)
    //     }
    // }, [handleSearch])

    // useEffect(() => {
    //     handleSearch()
    // }, [handleSearch])
    const [searchedName, setName] = useState('')
    const [searchBool, setBool] = useState(false)

    const setSearchedPokes = useCallback((newPokeList) => {
        setPokemons(newPokeList)
    }, [setPokemons])

    useEffect(() => {
        const filteredPokes = sourcePokemonList.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(searchedName.toLowerCase());
        });
        searchedName !== "" ? setSearchedPokes(filteredPokes) : setSearchedPokes(sourcePokemonList);
        searchedName !== "" ? setBool(false) : setBool(true);
    }, []);

    function handleSearch(e) {
        setName(e.target.value)
    }

    return (
        <form className="poke-form">
            <input id="input" type="text" placeholder="Quem é esse pokemón?" value={searchedName} onChange={handleSearch} />
            {searchBool ? (
                <div>{`Total found (${listSize})`}</div>
            ) : listSize > 0 ? (
                <div>{`Results for "${searchedName}" (${listSize})`}</div>
            ) : (
                <div>{`"${searchedName}" not found `}</div>
            )}
        </form>
    )
}

export default PokemonSearchForm