import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [value, setValue]=useState(0)
  const [toggle, setToggle]=useState(false)

  const Increment=()=>{
    setValue(value+2)

  }
  const Decrement=()=>{
    setValue(value-5)

  }
  const handleSuffle=()=>{
    if(toggle==true){
      setToggle(false)
    }else if(toggle==false){
      setToggle(true)
    }
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h3>Value: {value}</h3>
      {toggle? 
      <button disabled={value>=20} onClick={Increment}>+</button>:
      <button disabled={value<=0} onClick={Decrement}>-</button>}
      <button onClick={handleSuffle}>Shuffle</button>
    </div>
  );
}

export default App;
