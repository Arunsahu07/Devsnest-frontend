
import './App.css';
import {useState} from 'react';

function App() {
    const [info , setInfo] = useState({});
    const [place , setPlace] = useState('');
    async function  updatePlace()
  {
    await fetch(`https://api.weatherapi.com/v1/current.json?key=c7ecd36dd16a43828e0102855212907&q=${place}`)
    .then(res=>res.json())
    .then(data=>{console.log('data',data);setInfo(data)})
  }
  return (
    <div className="App">
      <div>
      <input value={place} onChange={(e)=>{setPlace(e.target.value)}} ></input>
      <button onClick={updatePlace}>enter</button></div>
      {info.location ? <div>
        <h1>
          {info.location.name}</h1>
          <div>Condition : {info.current.condition.text}</div>
          <span>Temp : {info.current.temp_c} °C</span>
          <div>Humidity : { info.current.humidity}</div>
          <div>wind : {info.current.wind_kph}kmph</div>
        
      </div> : <div>Place not found </div>}
    </div>
  );
}

export default App;
