import Navbar from "./components/Navbar";
import './App.css';
import { Story } from "./components/Story";
import { Posts } from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Story/>
      <Posts/>
      
    </div>
  );
}

export default App;
