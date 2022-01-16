import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const LoginPage = ({img}) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [show, setShow] = useState(false);

  //   console.log(password);
  const login = () => {
    console.log(username, password);
  };

  return (

      <CustomDiv img={img}>
        <AnotherDiv>
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
};

const CustomDiv = styled.div`
  margin-top: 60px;
//   border: 2px solid red;
  align-items: center;
  background-image: ${(props)=>`url('/images/${props.img}')`};
  background-size: cover;
  background-position: center;
  backgroung-repeat: no-repeat;
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
  border: 1px solid black;
  width: 500px;
  height: 500px;
  background: white;
  border-radius: 5%;
  box-shadow: 5px 10px;

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
