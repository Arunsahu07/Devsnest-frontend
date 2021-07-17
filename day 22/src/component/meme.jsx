import {useState} from 'react';

export default function Meme({ meme, setMeme }) {
 const [form, setForn]= useState({
  template_id: meme.id,
  username:"teasty",
  password:'PPS$Asr52ttCfaF',
  boxes:[],

 });

   
  console.log("meme count=", meme.box_count);
  function CreateMeme(){ 
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    console.log("url=", url);
    console.log(form.boxes);
    form.boxes.map( (val,ind)=>{
       url+=`&boxes[${ind}][text]=${val.text}`;
       console.log('url=',url);
       try{
       fetch(url)
       .then(res=>res.json())
       .then(data=>{    setMeme( data !== undefined ?  {...meme,url:data.data.url} : meme    );
    } )
  }catch(err){ setMeme( meme ); console.log('catching'); }    
   } );
    
    }
  return (
    <div className='Meme'>
      <div className='imgContainer'>
      <img src={`${meme.url}`} alt=''></img>
      </div>
      <div className='buttonAndInput'>
      <div className="inputField">
        {[...Array(meme.box_count)].map((val, ind) => {
          console.log(ind);
          return <input key={ind} placeholder={`Meme template${ind+1}`}
          onChange={ e=>{ 
            const newBox=form.boxes;
            newBox[ind]= {text : e.target.value};
            setForn( {...form,boxes:newBox } );
          } }  
          ></input>;
        })}
      </div>
      <div className="buttonField">
      <button onClick={CreateMeme} > Create meme! </button>
      <button onClick={ ()=>{setMeme(null)} } >Choose template</button>
      </div>
      </div>

      
    </div>
  );
}
