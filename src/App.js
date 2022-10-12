import {useState, useEffect} from 'react'
import './App.css';

function App() {
const [time, setTime] = useState(0)
const [timerOn, setTimerOn] = useState(false)
const [likes, setLikes] = useState(0)

useEffect(() => {
  let interval = null
  if(timerOn) {
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 10)
    },10)
  }else {
    clearInterval(interval)
  }
  return () => clearInterval(interval)
}, [timerOn])


 
  
  return (
    <div className="App">
    <div>{time}</div>
    <button onClick={() => setTimerOn(true)}>start</button>
    <button onClick={() => setTimerOn(false)}>stop</button>
    <button onClick={() => setTime(0)}>reset</button>
    <div>{likes}</div>
    <button onClick={() => setLikes(likes + 1)}>likes</button>

 

   
</div>
  );
}

export default App;
