import {useState, useEffect} from 'react'
import './App.css';

function App() {
const [time, setTime] = useState(0)
const [timerOn, setTimerOn] = useState(false)
const [pokemons, setPokemons] = useState([])
const [currentPokemon, setCurrentPokemon] = useState(1)
const [pokemon, setPokemon] = useState('')
const [count, setCount] = useState(0)

useEffect(() => {
  let interval = null;
  if(timerOn) {
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 10)
    },100)
  } else{
      clearInterval(interval)
  }
  return () => clearInterval(interval)
 },[timerOn])

//  useEffect((name) => {
//   fetch("https://pokeapi.co/api/v2/pokemon")
//   .then((r) => r.json())
//   .then((pokemons) => setPokemons(pokemons.results))

//  },[])

useEffect((name) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`, {})
  .then((r) => r.json())
  .then((pokemon) => setPokemon(pokemon))
  console.log(pokemon)
}, [currentPokemon])

function handleClick() {
  setCurrentPokemon(currentPokemon + 1)
}


 
  
  return (
    <div className="App">
    <div>{time}</div>
    <button onClick={() => setTimerOn(true)}>Start</button>
    <button onClick={() => setTimerOn(false)}>Stop</button>
    <button onClick={() => setTime(0)}>Reset</button>
    <br></br>
    {count}
    <button onClick={() => setCount(count + 1)}>Likes</button>
    <br></br>
    {pokemon ? <img src={pokemon.sprites.front_default}/> : "no pokemon yet"}
    <button onClick={handleClick}>Next Pokemon</button>



    {/* <div>{pokemons.map((pokemon) => {
      return <h1>{pokemon.name}</h1>
    })}</div> */}
   
</div>
  );
}

export default App;
