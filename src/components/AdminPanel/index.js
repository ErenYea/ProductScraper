import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';

import ErrorPage from '../Error'


const AdminPanel = ()=>{
    const [adminrights,setadminrights] = useState(false)
    const cookies = new Cookies();

    console.log(cookies.get('username'))
    useEffect(()=>{
        if (cookies.get('username')=='admin'){
        setadminrights(true);
    }else{
        setadminrights(false);
    }
    },[])
    

    if (adminrights) {
        return(
            <div className="container">
                <h2>Admin Page</h2>
            </div>
        )
    } else {
        return(
            <ErrorPage errormessage="Don't Have Admin Rights"></ErrorPage>
        )
    }


}

export default AdminPanel;