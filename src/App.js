import React from "react";
import { createContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Product from "./components/Products";
import Error from './components/Error'
import Contact from './components/Contact'
import About from './components/About'
import Landing from './components/Landing'
import AdminPage from './components/AdminPanel'
import LoginPage from './components/Login'
import SingleProduct from './components/SingleProduct'
import { useFetch } from './components/customhook/2-useFetch'
import "slick-carousel/slick/slick-theme.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function App() {
  const {loading,products} = useFetch('http://localhost:3001/table')

  if (loading){
    return(
      <div className="App">
        <Router>
          <Header></Header>
          <div className="container">
            <Box sx={{ display: 'flex' , justifyContent: 'center'}}>
                        <CircularProgress />
            </Box>
          </div>
        </Router>
      </div>
    )
  }else{
      return (
    <div className="App">
      <Router>
        <Header products={products}></Header>
        <Switch>
          <Route path="/product" render={(props)=> <Product products={products} {...props}/>}/>
            
          <Route path="/singleproduct" render={(props)=> <SingleProduct {...props}/>} /> 


          <Route exact path="/" >
            <Landing products={products} />
          </Route>
      
          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact" >
            <Contact img="simplebackground.jpg"/>
          </Route>

          <Route path="/admin-panel" >
            <AdminPage products={products}/>
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
  
}

export default App;
