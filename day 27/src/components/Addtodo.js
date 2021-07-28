import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addItem ,loadTodo} from './actions';
const AddTodo=()=>{
    const [item, setItem] = useState('')
    const dispatch = useDispatch();
    return (
        <div>
            <input 
             onChange={(e)=>{setItem(e.target.value)}}
            placeholder='add todo' value={item} ></input>
           
            <button onClick={()=>{ 
                dispatch( addItem( {title : item,
                done : false} ) )
                setItem('')}}>+</button>
            <button onClick={()=>{dispatch(loadTodo())}} >Load todo</button>
        </div>
    )
}
export default AddTodo;