import './App.css';
import PokeCard from './components/PokeCard';

function App() {
  return (
    <>
      <h1 className='title'>Pokédex</h1>

      <div className='container'>

        <PokeCard name={'Charmander'} />
        <PokeCard name={'Pikachu'} />
        <PokeCard name={'Onix'} />
        <PokeCard name={'Bulbasaur'} />

      </div>

    </>
  );
}

export default App;
