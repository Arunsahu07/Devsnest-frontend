import './App.css';
import React , {useState} from 'react';

function Counters(){
  let [counter , setCounter]= useState(0);
  function increment(){
  setCounter(++counter)}
  return <button onClick={increment} style={{display:'inline-block'}}>{counter}</button>

}


function App() {
  return ( 
    <div className='container'>
      <Counters className='a'/>
      <Counters className='a' />
      <Counters  className='a' />
      <Counters className='a' />
      
      

    </div>
   ) 
}




export default App;
