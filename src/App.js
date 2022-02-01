import React from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header/Header";
import Product from "./components/Products";
import Error from './components/Error'
import Contact from './components/Contact'
import About from './components/About'
import Landing from './components/Landing'
import AdminPage from './components/AdminPanel'
import LoginPage from './components/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/product">
            <Product />
          </Route>


          <Route exact path="/" >
            <Landing />
          </Route>
      
          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact" >
            <Contact img="simplebackground.jpg"/>
          </Route>

          <Route path="/admin-panel" >
            <AdminPage/>
          </Route>

          <Route path='/login' >
            <LoginPage img="simplebackground.jpg"/>
          </Route>

          <Route path="*">
            <Error errormessage="Page Not found" redire=""/>
          </Route>

        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
