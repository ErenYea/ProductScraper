import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';

import ErrorPage from '../Error'
import Tables from './table';


const AdminPanel = (props)=>{
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
            <main>
                <section className="container">
                    <div className="title">
                    <h2>Admin</h2>
                    <div className="underline"></div>
                    </div>
                    <Tables products={props.products} />
                </section>
            </main>
        )
    } else {
        return(
            <ErrorPage errormessage="Don't Have Admin Rights" redire="login"></ErrorPage>
        )
    }


}

export default AdminPanel;