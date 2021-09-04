import Navbar from "./components/Navbar";
import './App.css';
import { Story } from "./components/Story";
import { Posts } from "./components/Posts";
import {Profile} from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Story/>
      <Profile/>
      <Posts/>
      
    </div>
  );
}

export default App;
