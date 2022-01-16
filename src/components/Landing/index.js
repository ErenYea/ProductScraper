import React, { useState, useEffect} from "react";
import styled from 'styled-components';

import Slider from '../SliderProduct';
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