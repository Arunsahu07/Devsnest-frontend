import "./styles.css";
import Card from "./Card.jsx";
export default function App() {
  return (
    <div className="App">
     
      <h1>Clorie Read Only</h1>
      <div className="cardBox">
      <Card />
      <Card Head="hi there" Content="pass some content here"/>
      <Card Head="hi there" Content="pass some content here"/>
      <Card Head="hi there" Content="pass some content here"/>
      <Card Head="hi there" Content="pass some content here"/>
      <Card Head="hi there" Content="pass some content here"/>
      </div>
    </div>
  );
}
