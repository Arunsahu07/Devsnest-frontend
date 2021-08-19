import React from "react";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/cart";
import Navbar from "./components/navBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route  path="/cart" component={Cart} />
          <ProductCard/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
