import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Product from "./components/Products";
import Error from './components/Error'
import Contact from './components/Contact'
import About from './components/About'
import Landing from './components/Landing'
import AdminPage from './components/AdminPanel'

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/product" element={<Product/>} />


          <Route exact path="/" element={<Landing/>} />
      
          <Route path="/about" element={<About/>} />

          <Route path="/contact" element={<Contact/>} />

          <Route path="/admin-panel" element={<AdminPage/>} />

          <Route path="*" element={<Error errormessage="Page Not found"/>}/>

        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
