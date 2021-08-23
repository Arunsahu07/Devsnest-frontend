import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Listdata from "./components/Listdata"
function App() {
  return (
    <div className="App">
      <Input/>
      <Listdata/>
    </div>
  );
}

export default App;
