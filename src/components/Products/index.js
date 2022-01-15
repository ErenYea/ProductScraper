import React from 'react'
import Product from './Product'
import { useFetch } from '../customhook/2-useFetch'
import styled from 'styled-components'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-prop-types-example'

const Index = () => {
  const { products } = useFetch(url)
  return (
    

    <div className="container">

    
      <CustomDiv> 
        <CustomHeading>Products</CustomHeading>
        <section className='products'>
          {products.map((product) => {
            return <Product key={product.id} {...product} />
          })}
        </section>
      </CustomDiv>
    </div>
    
  )
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