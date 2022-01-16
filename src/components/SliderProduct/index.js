import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const ImageSlider = () => {
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
        <Customred >
          <img
            src="https://i5.walmartimages.com/asr/e905ad27-5cc2-42ec-a823-2de4d12c2c8a.f930a9e0ddfe273015986dd73733b1be.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            alt="No image"
            width="280px"
            height="150px"
          />
        </Customred>
      </Wraps>
      <Wraps>
        <Customred>
          <img
            src="https://i5.walmartimages.com/asr/d2f5acf1-c4fe-4701-a33e-74e0e58194cf.d1d07f8210f04a0f6b15319f5c014a45.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            alt="No image"
            width="280px"
            height="150px"
          />
        </Customred>
      </Wraps>
      <Wraps>
        <Customred>
          <img
            src="https://i5.walmartimages.com/asr/8488b4ae-20dd-4775-9087-7b4b682f4cc0.821e62fe5fe3e142f14b7d5aed11853d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            alt="No image"
            width="280px"
            height="150px"
          />
        </Customred>
      </Wraps>
      <Wraps>
        <Customred >
          <img
            src="https://i5.walmartimages.com/asr/8bb5e083-82de-44a1-89d6-c88109051785.296f871a76c999c568b0fd7e5711eedf.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            alt="No image"
            width="280px"
            height="150px"
          />
        </Customred>
      </Wraps>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  // display:flex;
  // justify-content: space-between;
//   border: 2px solid red;
  // height :200px;
  // align-items:center;
  // justify-content: center;
  margin-bottom: 50px;
  padding: 10px;
`;

const Wraps = styled.div`
  display: block;
  // background:grey;
  // display:flex;
  // justify-content: space-between;
  padding: 20px;
//   border: 2px solid green;
  height: 200px;
  margin-left: 10px !important;
  margin-right: 10px !important;
`;
const Customred = styled.div`
  height: 100%;
  border: 1px solid;
  border-radius: 5%;
  cursor: pointer;
  box-shadow: 10px 10px;
  bor
`;

export default ImageSlider;
