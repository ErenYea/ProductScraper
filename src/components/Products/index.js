import React from 'react'
import Product from './Product'

import styled from 'styled-components'
import Slider from '../SliderProduct'
import "slick-carousel/slick/slick.css";
// import products from './data'
import { useFetch } from '../customhook/2-useFetch'
import { useContext, useState, useEffect } from 'react';
import "slick-carousel/slick/slick-theme.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';




const Index = ( props ) => {
  // console.log(props);
  // console.log("ham");
  // const products = useContext(UserContext)
  // const {loading,products} = useFetch('http://localhost:3001/table')
  // if (loading) {
  //   return(
  //     <div className="container">
  //       <Box sx={{ display: 'flex' , justifyContent: 'center'}}>
  //                   <CircularProgress />
  //       </Box>
  //     </div>
  //   )
  // } else{
    // console.log(products);
    
    return (
      

      <div className="container">

      
        <CustomDiv> 
          <CustomHeading>Products</CustomHeading>
          <section className='products'  style={{ gridTemplateColumns: `${props.property}`}}>
            {props.products[0].data[0].map((product) => {
              return <Product key={product.item_number} {...product} />
            })}
          </section>
          <CustomHeading>
            Recommended Products
          </CustomHeading>
          <Slider/>
        </CustomDiv>
      </div>
    
  )
}
  // }
  
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
export default Index;



