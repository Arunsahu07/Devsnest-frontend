import './app.css'
import useToggle  from "./component/useToggle";
function App()
{

const [val ,setToggle] = useToggle();   
return <button onClick={() => setToggle(!val)}>{val ? 'ON' : 'OFF'}</button>;
}
export default App;
