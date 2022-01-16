import React, { useState } from "react";


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