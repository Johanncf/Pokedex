import './App.css';
import Home from './pages/Home';
// import { getPokemons } from './dependencies/apiCall';
// import { useEffect, useState } from 'react'
function App() {

  // const [pokemonName, setPokemonName] = useState('')
  // const [pokemons, setPokemons] = useState([])

  // function getPokemon() {

  //   const input = document.getElementById('input')
  //   setPokemonName(input.value)
  //   console.log(input.value)

  // }

  // useEffect(() => {
  //   getPokemons("?limit=2000")
  //     .then(response => {
  //       setPokemons(response.results)
  //     })
  // })

  return (
    <div className="container">
      <h1 className="title">Pokédex</h1>

      {/* <PokemonSearchForm sourcePokemonList={pokemons} setPokemons={setPokemons} listSize={pokemons.length} /> */}
      <form className="poke-form">
        <input id="input" type="text" placeholder="Quem é esse pokemón?"/>
      </form>

      <div className="cards-container" >

        <Home quantPokes="?limit=2000" className='home' />

      </div>




    </div>
  );
}

export default App;
