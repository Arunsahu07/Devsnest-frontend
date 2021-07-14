import React , {useState} from 'react';
import './Style.css'
export default function CalorieTracker()
{  
    const [item , setItem] = useState('');
    const [calorie , setCalorie]=useState('')
    const [Rec, setRec] = useState([]);

    return (
        <div className='Container'>
        <h1>Calorie Tracker</h1>
        <div id='inputField'>
        <input value={item} type='text' placeholder='enter item name' onChange={(e)=>{setItem(e.target.value)}} ></input>
        <input value={calorie} type='number' placeholder='Calorie amount' onKeyPress={e=>{console.log(e.charCode); if(e.charCode===13)ClickHandler();}} onChange={(e)=>{setCalorie(e.target.value)}} ></input>
        <button id='addBtn' onClick={ClickHandler}>Add item</button>
        </div>
        <Show/>
        </div>
        )
    function ClickHandler()
    {
    
        setRec([...Rec, [ item, calorie]])
        console.log(item,calorie);
        setItem('');
        setCalorie('')
    }

    function Show()
    {
        return ( <div className='cardList'>
            { Rec.map( function SetValues(val ,ind){
                const [currItem, setCurritem] = useState(val[0])
                const [buttonInnerText, setButtonInnerText] = useState("Edit");
                const [currCalorie , setCurrCalorie]= useState(val[1])
                console.log(ind,'ind');
                return ( <div key = {ind} className='card'>
                      <div className='first'><h2>{currItem}</h2>You have consumed {currCalorie}</div>
                      <button className='unClicked fourth' onClick={e=>{  e.target.classList.toggle('unClicked');  e.target.classList.contains('unClicked') ? setButtonInnerText('Edit'):setButtonInnerText('Done')    }}>{buttonInnerText}</button>
                      <button className={ind} onClick={DeleteItem}>Delete</button>
                      
                      <input  value={currItem} className='second' onChange={e=>{ setCurritem(e.target.value)} }></input>
                      <input type='number' value={currCalorie} className='third' onChange={e=>{ setCurrCalorie(e.target.value)} }></input>                      
                      
                </div>)
            } )}

        </div>)
    }
    function DeleteItem(e)
    { 
      setRec( Rec.filter((val , ind)=>{
           console.log(e.target.className != ind);
           return e.target.className != ind;
       } ))
    //    setRec(newRec)
    }

}
