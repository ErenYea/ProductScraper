import React, { useState, useEffect } from "react";
import styled from "styled-components";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const getMessage = () => {
    console.log(email, text);
  };

  return (
    <div className="container">
      <CustomForm>
        <CustomeHeading>Contact US</CustomeHeading>
        <Customdivform>
          <FormControl>
            <InputLabel htmlFor="my-email">Email address</InputLabel>
            <Input
              id="my-email"
              aria-describedby="my-helper-text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
        </Customdivform>

        <Customdivform>
          <FormControl>
            <InputLabel htmlFor="my-message">Message</InputLabel>
            <Input
              id="my-message"
              value={text}
              onChange={(e) => setText(e.target.value)}
              fullWidth
              autoComplete
              multiline
              required
            />
          </FormControl>
        </Customdivform>

        <CustomButton>
          <Button
            variant="contained"
            onClick={getMessage}
            size="medium"
            color="primary"
          >
            Submit
          </Button>
        </CustomButton>
      </CustomForm>
    </div>
  );
};

const CustomForm = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  // border: 2px solid red;
  justify-content: center;
  padding: 20px;

  height: 100vh;
`;

const Customdivform = styled.div`
  // border: 2px solid green;
  marign: 30x;
  display: inline-block;
  padding: 20px;
`;

const CustomButton = styled.div`
  // width:50px;
  // border: 2px solid red;
`;

const CustomeHeading = styled.h1`
  font-weight:400;
  font-size: 50px;
  font-style:underline;

`


export default Contact;
