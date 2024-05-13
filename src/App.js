import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [time,setTime]=useState(0)
  const [timeRunning, setTimeRunning] = useState(false)
  useEffect(()=>{
    if(timeRunning)
    setTimeout( ()=>{
    setTime(time+1)
    }, 1000 )
   } )
  const reset = () => {
    setTimeRunning(false)
    setTime(0)
  }
  const stop = () => {
    setTimeRunning(false)
  }
  return (
    
    <div className="App">
      <header className="App-header">
      <button onClick={reset}>reset</button>
      <h2>{time}</h2>
      <button onClick={()=>setTimeRunning(true)}>start</button>
      <button onClick={stop}>stop</button>
      </header>
    </div>
  );
}

export default App;
