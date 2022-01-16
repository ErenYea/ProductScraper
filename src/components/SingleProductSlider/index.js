import Slider from "react-slick";
import React from "react";
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
        <Carousel {...settings} className="review">
            <Wraps img="image1.jpeg">
                
                
            </Wraps>
            <Wraps img="image2.jpeg">
                
            </Wraps>
            <Wraps img="image3.jpeg">
                
            </Wraps>
            <Wraps img="image4.jpeg">
                
            </Wraps>


        </Carousel>
    )

}


const Carousel = styled(Slider)`
    // border: 2px solid red;
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
    // border: 2px solid green;
    height:477px;
    background-image:${(props)=>`url('/images/${props.img}')`};
    background-size: cover;
    // background-position: center;
    backgroung-repeat: no-repeat;

`




export default SingleSLider;