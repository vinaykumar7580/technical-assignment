import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [text, setText]=useState("")
  const [data, setData]=useState({})

  const handleSubmit=(e)=>{
    e.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=840de593b7028de6e424162454790fe5`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((res)=>res.json())
    .then((res)=>{
      setData(res)
    })
    .catch((err)=>{
      console.log(err)
    })

    setText("")
    
  }
  return (
    <div className="App">
      <h1>Lakebrains Api Calls</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search' value={text} onChange={(e)=>setText(e.target.value)}/>
        <input type='submit'value="search"/>
      </form>

      {/* show data on page */}
      <div>
        <h3>name: {data?.name}</h3>
        <h3>temp: {data?.main?.temp}</h3>
        <h3>main: {data?.weather[1].main}</h3>
        <h3>description: {data?.weather[1].description}</h3>
        
      </div>
    
    </div>
  );
}

export default App;
