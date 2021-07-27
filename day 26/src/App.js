import { useDispatch, useSelector } from "react-redux";
import { firstNameHandler,lastNameHandler } from "./actions/inputActions";
import './App.css'
export default function App()
{ const firstName = useSelector( (state)=>state.firstName );
  const lastName = useSelector( (state)=> state.lastName  );
  const dispatch=useDispatch();
  return <div>
    <h1>Redux state mangement</h1>
    <input type='text' onChange={e=>{dispatch(firstNameHandler(e.target.value))}} placeholder='last-name'/>
    <input type='text'onChange={e=>{ dispatch(lastNameHandler(e.target.value))}} placeholder='last name'/>
    <div className='firstNameDiv'> First name :   { firstName}</div>
    <div className='secondNameDiv'> Last name :          {lastName}</div>
  </div>
}
