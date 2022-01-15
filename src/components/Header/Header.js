import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import Search from '../Search'

function Header() {
  const [BurgerOpen, setBurgerOpen] = useState(false);
//   const cars = useSelector(selectCars);
//   console.log(cars);
  return (
    <Container>
      <a>
        <img src="/images/logo.jpeg" alt="" width="100px"/>
      </a>
      <Menu>
        <Search/>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerOpen(!BurgerOpen)} ></CustomMenu>
      </RightMenu>
      <BurgerNavbar close={BurgerOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerOpen(!BurgerOpen)} sx={{ color: "black" }}></CustomClose>
        </CloseWrapper>

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNavbar>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  // border: 2px solid red;
  background:#282A35;
  color:white;
`;

const Menu = styled.div`
  // border:2px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-x:0px 10px;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    color:white !important;
  }
  
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNavbar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  list-style: none;
  display: flex;
  z-index: 16;
  background: white;
  width: 300px;
  padding: 20px;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.close ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
