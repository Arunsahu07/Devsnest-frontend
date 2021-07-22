import React , {useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import context from './AuthContext';
import Home from './home';
export default function Profile()
{
    const data= useContext(context);
    return <h1>
        <Route>
            {data.loginStatus === true? "Welcome to Profile":<Redirect to={"/Home"} />}
        </Route>
    </h1>
}