import { addType } from "../actions/addNote";
import {delType} from "../actions/deleteNote"
function noteReducer(state:string[] = [],action: delType|addType):string[]
{
    switch(action.type)
    {
        case "ADD_NOTE":
            return [...state, action.payload]
        case "DELETE_NOTE":
            return state.filter((_:string,idx:number)=>{
                return idx !== action.payload
            })
        default:
            return state
    }
}
export default noteReducer;