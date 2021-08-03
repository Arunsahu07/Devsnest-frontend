
import './App.css';
import {updatePlace , updatePlaceData , toggleTheme} from './actions/updatePlace';
import {useSelector , useDispatch} from 'react-redux';
import Cart from './Cart';
function App() {
   const toggle = useSelector(state=>state.theme);
   const dispatch = useDispatch();
   const dark = useSelector ( (state) => state.theme  )
   const placeData = useSelector ( state=>state.placeData)
   console.log('data==',placeData, toggle,'=toggle');

   let place ;
  return (
    <div className={`App ${toggle ? "dark" : 'light'  }`} >
      <div  >
      <button className={`dark-btn ${toggle ? "dark" : 'light'  }`} onClick={ ()=>{dispatch(toggleTheme()) }}>{toggle ? "Light" : 'Dark'}</button>
      <input  className={` ${toggle ? "dark" : 'light'  }`}  onChange={(e)=>{ place=e.target.value;dispatch( updatePlace(e.target.value) ) }} ></input>
      <button  className={` ${toggle ? "dark" : 'light'  }`} onClick={ ()=>{dispatch( updatePlaceData(place)  )}}>Submit</button></div>
      <Cart/>
    </div>
  );
}

export default App;
