import React , { useState} from 'react';
import './A.css'

export default function DotoList(){
 const [todos,setTodos]=useState([]);
 const [ value , setValue]=useState("");

function changeHandler(e)
 { 
    setValue(e.target.value);
 }

 function clickHandler()
  { 
    setTodos( [...todos , value]);
    setValue('');
  }

function ShowDotos()
{  
  return(
  <div className='todoContainer'>
   { 
      todos.map( 
          (val , ind)=>{  
            return (  
              <div className='todoUnit'>
                 <div key='inds' className='task'>{val} </div>
                 <button className={ind} onClick={ (e)=>{
                  const newdoto=todos.filter( ( val ,index )=>
                  {  
                    return e.target.value !=  index;
                  } )
                  setTodos(newdoto);

                 }
                
                } >Delete</button>
               
               
              </div>
            )
          }
        ) 
   }
  </div>
  )
}

return (  
         <div className = 'container'>
            <div className= 'inputField' > 
              <input  onChange={changeHandler} value={value} ></input>
              <button className = 'addBtn' onClick={clickHandler}  >Add</button>
            </div>
            <ShowDotos/>
         </div>
       )
}
