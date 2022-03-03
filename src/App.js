import React , {useEffect,useState} from "react";
import { createContext } from "react";
import "./App.css";
import axios from 'axios';
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
import { useSelector, useDispatch } from 'react-redux';
import {
  additems,
  getAsync,
  selectProducts,
} from './features/Products/productslice';


function App() {
  const [data,setData] = useState(null);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  // const {loading,products} = useFetch('http://localhost:3001/table')
  const funct = async () => {
        const response = await axios.get('http://localhost:3001/table');
        // The value we return becomes the `fulfilled` action payload
        setData(response.data[0].data[0]);
      }
  useEffect(() => {
      dispatch(getAsync('http://localhost:3001/table'))
      console.log(products);
    // console.log(products[0].data);
  },[])

 

  // if (loading){
  //   return(
  //     <div className="App">
  //       <Router>
  //         <Header></Header>
  //         <div className="container">
  //           <Box sx={{ display: 'flex' , justifyContent: 'center'}}>
  //                       <CircularProgress />
  //           </Box>
  //         </div>
  //       </Router>
  //     </div>
  //   )
  // }else{
      return (
    <div className="App">
      <Router>
        <Header products={products}></Header>
        <Switch>
          <Route path="/product" render={(props)=> <Product {...props}/>}/>
            
          <Route path="/singleproduct" render={(props)=> <SingleProduct {...props}/>} /> 


          <Route exact path="/" >
            <Landing  />
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
  


export default App;
