import React from "react";

import SingleSLider from "../SingleProductSlider";
import Product from '../Products';
import SearchBy from '../SearchBy'
import { useSelector, useDispatch } from 'react-redux';
import {
  additems,
  getAsync,
  selectProducts,
} from '../../features/Products/productslice';

const Landing = ( props ) =>{
    // console.log(props.products);
    const products = useSelector(selectProducts);
    
    
    return(
        <div className="container">
            <SingleSLider></SingleSLider>
            <SearchBy ></SearchBy>
            {/* <Product property="repeat(auto-fit, minmax(225px, 1fr))" products={props.products}></Product> */}
        </div>
        


    );

}


export default Landing;