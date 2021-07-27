import { useDispatch, useSelector } from "react-redux";
import { firstNameHandler,lastNameHandler } from "./actions/inputActions";
export default function App()
{ const firstName = useSelector( (state)=>state.firstName );
  const lastName = useSelector( (state)=> state.lastName  );
  const dispatch=useDispatch();
  return <div>
    <input type='text' onChange={e=>{dispatch(firstNameHandler(e.target.value))}} placeholder='last-name'/>
    <input type='text'onChange={e=>{ dispatch(lastNameHandler(e.target.value))}} placeholder='last name'/>
    <div> First name :   { firstName}</div>
    <div> Last name :          {lastName}</div>
  </div>
}
