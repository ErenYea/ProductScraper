import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'


const ImageSlider = ()=>{

    let settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "80px",
      slidesToShow: 3,
      speed: 500,
    };


    return (
        <Carousel {...settings}>
            <Wraps>
                <CustomHeading>
                    1
                </CustomHeading>
                
            </Wraps>
            <Wraps>
                <CustomHeading>
                    2
                </CustomHeading>
            </Wraps>
            <Wraps>
                <CustomHeading>
                    3
                </CustomHeading>
            </Wraps>
            <Wraps>
                <CustomHeading>
                    4
                </CustomHeading>
            </Wraps>

        </Carousel>
      
    )
}



const Carousel = styled(Slider)` 
    // display:flex;
    // justify-content: space-between;
    border: 2px solid red;
    // height :200px;
    // align-items:center;
    // justify-content: center;
    margin-bottom:50px;
    padding:10px;
`





const Wraps = styled.div`
    display:block;
    // background:grey;
    // display:flex;
    // justify-content: space-between;
    padding:20px;
    border: 2px solid green;
    height:198px;
    margin-left:10px !important;
    margin-right:10px !important;

`
const CustomHeading = styled.h1`
    height:100%;
    border:2px solid red;
    cursor:pointer;

`


export default ImageSlider;