import {useContext} from 'react';
import { Route,Redirect } from 'react-router';
import context from './AuthContext';
import Home from './home';
export default function Dashboard()
{   const data = useContext(context);
    return <h1>
        <Route>
            {data.loginStatus===true? "Welcome to Dashboard" : <Redirect to={"/Home"}/>}
        </Route>
    </h1>
}