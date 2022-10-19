import {useState, useEffect} from 'react'
import './App.css';

function App() {
const [count, setCount] = useState(0)
const [timerOn, setTimerOn] = useState(false)

useEffect(() => {
  let interval = null 
  if(timerOn) {
    interval = setInterval(() => setCount(prevTime => prevTime + 10))
  } else {
    clearInterval(interval)
  }
  return () => clearInterval(interval)
},[timerOn])

let x = 100

function logx() {
  console.log(x)
}
 logx()

 function makeAdder(x) {
   return function(y) {
     return x + y

   }
 }

 const add5 = makeAdder(5)

 console.log(add5(10))
  
  return (
    <div className="App">
   <div>{count}</div>
   <button onClick={() => setTimerOn(true)}>start</button>
   <button onClick={() => setTimerOn(false)}>stop</button>
   <button onClick={() => setCount(0)}>reset</button>
   
</div>
  );
}

export default App;
