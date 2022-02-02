import React from 'react'

import Product from '../Products/Product'
import styled from 'styled-components'
import Slider from '../SliderProduct'
import "slick-carousel/slick/slick.css";
// import products from './data'
import { useFetch } from '../customhook/2-useFetch'
import "slick-carousel/slick/slick-theme.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Index = ( props ) => {


    console.log(props.location.state)
    console.log("areeb")

    return(<div className="container">
        <CustomDiv> 
          <CustomHeading>Product</CustomHeading>
          <section className='products'>
                <Product {...props.location.state}/>
          </section>
          
          
        </CustomDiv>
        
            
        
    </div>)
}

const CustomHeading = styled.h1`
//   border:2px solid green;
  text-transform: uppercase;
  padding-x: 3px;
  font-size:42px;
`
const CustomDiv = styled.div`
  // border:2px solid red;
  margin-top:100px;
  
`

export default Index