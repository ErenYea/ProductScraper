import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cookies from "universal-cookie";
import Axios from "axios";

import FormControl from "@mui/material/FormControl";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const LoginPage = ({ img }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const cookies = new Cookies();
  const [show, setShow] = useState(false);
  const [loginuser, setLoginuser] = useState(false);

  useEffect(()=>{
    if (cookies.get("username") != undefined) {
    setLoginuser(true);
  } else {
    setLoginuser(false);
  }
  },[loginuser])

  

  //   console.log(password);

  const getuser = async (username, password) => {
    const respnce = await Axios.post("http://localhost:3001/user", {
      username: username,
      password: password,
    }).catch((error) => {
      console.log(error);
    });
    console.log(respnce);
  };
  const login = () => {
    console.log(username, password);

    cookies.set("username", username, { path: "/" });
    cookies.set("password", password, { path: "/" });
    console.log(cookies.get("username"));
    console.log(cookies.get("password"));
    getuser(username, password);
    setLoginuser(true)
    // const respnce = Axios.post('http://localhost:3001/users',{username: username, password: password});
    // console.log(respnce);
  };

  const logout = ()=>{
    cookies.remove('username');
    cookies.remove('password');
    console.log(cookies.get('username'));
    setLoginuser(false);
    
  }

  if (loginuser) {
    return(
      <CustomDiv>
        <AnotherDiv className="review">
          <CustomHeading>Already Login</CustomHeading>
          <Wrap>
            <h3>Username:</h3>
            <h4>{cookies.get('username')}</h4>
          </Wrap>
          <Wrap>
            <Button
              variant="contained"
              onClick={logout}
              size="medium"
              color="primary"
            >
              Logout
            </Button>
          </Wrap>
        </AnotherDiv>
      </CustomDiv>
    );
  } else {
    return (
      <CustomDiv>
        <AnotherDiv className="review">
          <CustomHeading>Login</CustomHeading>
          <Wrap>
            <FormControl>
              <TextField
                id="my-username"
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => {
                  e.preventDefault();
                  setUsername(e.target.value);
                }}
              />
            </FormControl>
          </Wrap>

          <Wrap>
            <AnotherWrap>
              <FormControl>
                <TextField
                  id="my-password"
                  label="Password"
                  variant="outlined"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    e.preventDefault();
                    setPassword(e.target.value);
                  }}
                />
              </FormControl>
              <CustomShow onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
              </CustomShow>
            </AnotherWrap>
          </Wrap>
          <Wrap>
            <Button
              variant="contained"
              onClick={login}
              size="medium"
              color="primary"
            >
              Submit
            </Button>
          </Wrap>
        </AnotherDiv>
      </CustomDiv>
    );
  }
};

const CustomDiv = styled.div`
  margin-top: 60px;
  //   border: 2px solid red;
  align-items: center;
  // background-image: ${(props) => `url('/images/${props.img}')`};
  // background-size: cover;
  // background-position: center;
  // backgroung-repeat: no-repeat;
  justify-content: center;
  display: flex;
  height: 697px;
  //   background: grey;
`;

const CustomHeading = styled.h1`
  font-weight: 300;
  margin-bottom: 50px;
`;

const AnotherDiv = styled.div`
  // border: 1px solid black;
  width: 500px;
  height: 500px;
  background: white;
  border-radius: 5%;
  // box-shadow: 5px 10px;

  //   transform: scale(.9);
`;

const Wrap = styled.div`
  padding: 20px;
`;

const AnotherWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomShow = styled.h4`
  font-weight: 400;
  position: absolute;
  margin-left: 170px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 13px;
`;

export default LoginPage;
