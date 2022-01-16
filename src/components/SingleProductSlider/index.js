import Slider from "react-slick";
import React, { useState, useEffect} from "react";
import styled from 'styled-components'


const SingleSLider = ()=>{

    const settings = {

        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true

    }

    return(
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
    border: 2px solid red;
    // height :200px;
    // align-items:center;
    // justify-content: center;
    margin-top:150px;
    padding:10px;


`

const Wraps = styled.div`
    display:block;
    // background:grey;
    // display:flex;
    // justify-content: space-between;
    padding:20px;
    border: 2px solid green;
    height:477px;
    

`

const CustomHeading = styled.h1`


`


export default SingleSLider;