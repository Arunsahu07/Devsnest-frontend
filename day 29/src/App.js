
import './App.css';
import {updatePlace , updatePlaceData , toggleTheme} from './actions/updatePlace';
import {useSelector , useDispatch} from 'react-redux';
import Cart from './Cart';
function App() {
    
   const dispatch = useDispatch();
   const toggle = useSelector ( (state) => state.theme  )
   const placeData = useSelector ( state=>state.placeData)
   console.log('data==',placeData, toggle,'=toggle');

   let place ;
  return (
    <div className="App">
      <div>
      <button onClick={ ()=>{dispatch(toggleTheme()) }}>{toggle ? "Light" : 'Dark'}</button>
      <input  onChange={(e)=>{ place=e.target.value;dispatch( updatePlace(e.target.value) ) }} ></input>
      <button onClick={ ()=>{dispatch( updatePlaceData(place)  )}}>Submit</button></div>
      <Cart/>
    </div>
  );
}

export default App;
