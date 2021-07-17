import "./App.css";
import Meme from './component/meme';
import React, { useState, useEffect } from "react";
import Templates from "./component/templates";

function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  console.log('meme==', meme);

  useEffect(() => {
    const response = async () => {
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        console.log(data.data.memes);
        setTemplates(data.data.memes);
      } catch (err) {
        console.log(err);
      }
    };
    response();
    
  }, []);

  return (
    <div>
      <h1>Meme Generator</h1>
      { meme === null ? 
      <Templates templates={templates} setMeme={setMeme} /> : <Meme meme={meme} setMeme={setMeme}/>}
    </div>
  );
}
export default App;
