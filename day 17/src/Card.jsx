import "./cards.css";
const Card=(Props)=>{
  return (
    <div id='card'>
      <h2 id='head'>{Props.Head}</h2>
      <div id='content'>{Props.Content}</div>
      </div>
  )
}
export default Card;