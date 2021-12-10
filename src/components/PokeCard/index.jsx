// import handleGenerateBg from "../../utils/colorTypes";
import { useState, useEffect } from 'react'
import handleGenerateBg from '../../utils/colorTypes';
import axios from 'axios';

function PokeCard({ name }) {
    const [atk, setAtk] = useState('')
    const [def, setDef] = useState('')
    const [hp, setHp] = useState('')
    const [type, setType] = useState('')
    const [photo, setPhoto] = useState('')
    const [pokemon, setPokemon] = useState(name)
    const [pokeData, setPokeData] = useState([])



    async function getData() {
        const toArray = []
        try {
            let url = "https://pokeapi.co/api/v2/pokemon/" + pokemon.toLowerCase()
            let response = await axios.get(url)
            toArray.push(response.data)
            setAtk(response.data.stats[1].base_stat)
            setDef(response.data.stats[2].base_stat)
            setHp(response.data.stats[0].base_stat)
            setType(response.data.types[0].type.name)
            setPhoto(response.data.sprites.other.dream_world.front_default)
            setPokeData(toArray)

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const typeColor = handleGenerateBg(type)
    return (
        <div className='pokemon-card' style={{ backgroundColor: typeColor }}>
            <img className='pokemon-img' src={photo} alt={name} />

            <h2>{name}</h2>

            <ul className='pokemon-infos'>
                <li>HP: {hp}</li>
                <li>Attack: {atk}</li>
                <li>Defense: {def}</li>
            </ul>

            <div>
                {type}
            </div>
        </div>
    )
}

export default PokeCard;