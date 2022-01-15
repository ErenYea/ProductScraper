import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

import Header from "./components/Header/Header";
import Product from "./components/Products";



function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        
        <Product />
      </div>
    </div>
  );
}

export default App;
