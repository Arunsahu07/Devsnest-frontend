import {useState} from "react"
import AddNote from "../actions/addNote";
import { useDispatch } from "react-redux";
export default function Input()
{  const dispatch = useDispatch()
   const [note, setNote] = useState<string>("");
   return <div>
       <input value={note} placeholder="note here" onChange={(e)=>{setNote(e.target.value)}} />
       <button onClick={()=>{dispatch(AddNote(note));setNote("")}
      } >+</button>
      </div>
}

