import React from "react";

import SingleSLider from "../SingleProductSlider";
import Product from '../Products';
import SearchBy from '../SearchBy'


const Landing = ( props ) =>{
    // console.log(props.products);
    
    
    return(
        <div className="container">
            <SingleSLider></SingleSLider>
            <SearchBy products={props.products}></SearchBy>
            {/* <Product property="repeat(auto-fit, minmax(225px, 1fr))" products={props.products}></Product> */}
        </div>
        


    );

}


export default Landing;