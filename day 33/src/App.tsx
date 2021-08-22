import React, { useState } from "react";

import "./App.css";
import ThemeContext from "./components/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";
import Todo from "./components/Todo";

function App() {
  const [theme, setTheme]= useState<boolean>(false)
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className={theme?"App light":"App dark"}>
      <ToggleTheme/>
      <Todo/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
