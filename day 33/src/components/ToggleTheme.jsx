import { useContext } from "react";
import ThemeContext from "./ThemeContext";
export default function ToggleTheme()
{   const {theme ,setTheme}= useContext(ThemeContext);
    return <button onClick={()=>{setTheme(!theme)}} className={theme?"dark theme-btn":"light theme-btn"}>
        {theme?"Dark":"Light"}
    </button>
}
