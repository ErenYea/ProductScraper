import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import ErrorPage from '../Error'


const AdminPanel = ()=>{
    const [adminrights,setadminrights] = useState(false)

    if (adminrights) {
        return(
            <h1>Admin Page</h1>
        )
    } else {
        return(
            <ErrorPage errormessage="Don't Have Admin Rights"></ErrorPage>
        )
    }


}

export default AdminPanel;