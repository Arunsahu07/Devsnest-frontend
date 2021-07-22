import React, {useState}from 'react';
const context = React.createContext();
export default context;
export   function AuthContext({children})
{   const [isLogged ,setIsLogged]=useState(false)
    return (
    <context.Provider value={{loginStatus:isLogged,toggleLogin:setIsLogged}}>
        {children}
    </context.Provider>)
}