import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

const Error = () => {
  const [number, setnumber] = useState(5);
  const [redirect, setredirect] = useState(false);
  useEffect(() => {
    if (number == 0) {
      setredirect(true);
    }
    setTimeout(() => {
      setnumber((previousnumber) => previousnumber - 1);
    }, 1000);
  }, [number]);

  if (redirect) {
    return (
        <div className="container">
            <Navigate to="/" />
        </div>
    );
  } else {
    return (

        <div className="container">
            <CustomError>Error Page not found Redirecting in {number}</CustomError>
        </div>
    );
  }
};

const CustomError = styled.div``;

export default Error;
