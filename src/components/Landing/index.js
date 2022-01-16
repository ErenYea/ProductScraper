import React from "react";

import SingleSLider from "../SingleProductSlider";
import Product from '../Products';


const Landing = () =>{

    return(
        <div className="container">
            <SingleSLider></SingleSLider>
            <Product property="repeat(auto-fit, minmax(225px, 1fr))"></Product>
        </div>
        


    );

}


export default Landing;