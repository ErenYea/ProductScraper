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
            />
          </FormControl>
        </Customdivform>

        <Button variant="contained" onClick={getMessage}>
          Submit
        </Button>
      </CustomForm>
    </div>
  );
};

const CustomForm = styled.div`
  margin-top: 100px;
  // display:flex;
`;

const Customdivform = styled.div`
    


`

export default Contact;
