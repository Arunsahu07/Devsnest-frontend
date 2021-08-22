import { createContext } from "react";
interface themeContextType
{
    theme: boolean,
    setTheme: (theme: boolean)=>void,
}
const initialState: themeContextType={
    theme: false,
    setTheme: (theme:boolean)=>{},
}
const ThemeContext = createContext<themeContextType>(initialState);
export default ThemeContext;