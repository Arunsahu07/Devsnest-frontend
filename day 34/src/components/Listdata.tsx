import DeleteNote from "../actions/deleteNote";
import {useDispatch, useSelector} from 'react-redux'
import { reducerType } from "../Reducers/rootReducer";
export default function Listdata()
{
    const dispatch = useDispatch();
    const notes = useSelector((state:reducerType)=>state.notes )
    return <div>
        {notes.length>0? notes.map((note,idx)=>{
            return<div key={idx} className="note"> <li >{note}</li> 
            <button onClick={()=>{dispatch(DeleteNote(idx))}} >Done</button></div>
        }): <div className="msg">Enter a task to add</div>}
    </div>
}