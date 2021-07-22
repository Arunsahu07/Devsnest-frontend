import React, {useContext} from 'react';
import context from './AuthContext';
export default  function About()
{   const data = useContext(context);
    return <h1>{data.loginStatus===true ? 'You are logged in ':"you logged out"}</h1>
}