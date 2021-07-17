
export default function Templates({ templates , setMeme }) {
  return (
    <div>
      {templates.map((template) => {
        return (
          <div className="templates" key={template.id} >
            <div  
              className="img" onClick={  ()=>{setMeme(template)} }
              style={{ backgroundImage: `url( ${template.url})` }}
            >
            </div>
          </div>
        );
      })}
    </div>
  );
}
