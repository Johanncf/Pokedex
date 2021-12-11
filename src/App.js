import './App.css';
import PokeCard from './components/PokeCard';

function App() {
  return (
    <div className="container">
      <h1 className="title">Pokédex</h1>

      <form className="poke-form">
        <input id="input" type="text" placeholder="Quem é esse pokemón?" />
        <button id="select" type="button">Escolher</button>
      </form>

      <div className="cards-container">

        <PokeCard name="Charmander" />
        <PokeCard name="Pikachu" />
        <PokeCard name="Onix" />
        <PokeCard name="Bulbasaur" />
        <PokeCard name="Squirtle" />
        <PokeCard name="Caterpie" />
        <PokeCard name="Blastoise" />
        <PokeCard name="Charizard" />
        <PokeCard name="Pinsir" />
        <PokeCard name="Pidgeot" />
        <PokeCard name="Ekans" />
        <PokeCard name="Zubat" />
        <PokeCard name="Raichu" />

      </div>

    </div>
  );
}

export default App;
