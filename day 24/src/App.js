import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import About from './component/about';
import Home from './component/home';
import Profile from './component/profile';
import Dashboard from './component/dashboard';
import {AuthContext} from "./component/AuthContext";
import './App.css'
export default function App()
{  
    console.log(Router);
    return (
        <div className='container'>
            <Router>
            <nav>
            <Link to="/Home">Home</Link>
            <Link to="/About">about</Link>
            <Link to = "/Profile">Profile</Link>
            <Link to ='/Dashboard'>Dashboard</Link>
            </nav>
           
                <Switch>
                    <AuthContext>
                    <Route exact  path="/Home" component={Home}/>
                    <Route exact path="/About" component={About} />
                    <Route exact path='/Profile' component={Profile}/>
                    <Route exact path='/Dashboard' component={Dashboard}/>
                    </AuthContext>
                </Switch>
            </Router>
        </div>
    )
}