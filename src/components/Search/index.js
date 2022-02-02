import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Axios from "axios";
import { Redirect } from "react-router-dom";



const Search = () => {
    const [text,setText] = useState('')
    const [dataexist,setdataexist] = useState(false)
    const [data,setdata] = useState("")
    var resp='';
    const getdata = async (te) => {
        Axios.post("http://localhost:3001/search", {
            te:te
        }).then((response) => {
            console.log("hamza");
            console.log(response.data.data);
            setdata(response.data[0].data)
            resp =  response
        })
        // console.log(respnce);
        
        // return respnce;
    };
    const Searchthis = (te) =>{
        console.log(te)
        getdata(te)
        // if (resp == undefined){
        //     Searchthis(te)
        // }
        // console.log(resp);
        if (resp == undefined){
            setTimeout(() =>{
                // console.log(resp);
                setdataexist(true)
                // setdata(resp)
            },2000)
        }
        
    }
    useEffect(() => {
        if (resp==""){
            setdata("")
        }

    },[resp,dataexist,data])
  if (data != ""){
      return(<Redirect to={{ pathname:'/singleproduct', state:data}}/>)
  }else{
      
  return (
      <CustomSearch>
          
         <CustomTextField>
              <CustomInput id="outlined-basic" label="Search here" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Search Here"></CustomInput>
              {/* <TextField id="outlined-basic" label="Search here" variant="outlined"  value={text} onChange={(e)=>{setText(e.target.value)}}  sx={{height:'50%'}} inputProps={inputProps}/> */}
              <CustomSearchIcon>
                <SearchIcon  onClick={()=>Searchthis(text)} sx={{ color: "black" }}/>
              </CustomSearchIcon>
              
          </CustomTextField> 
          
      </CustomSearch>
  );
};
}
const CustomSearch = styled.div`
    background:white;
    border-radius:20px; 
    display:flex;
    justify-content:space-between;
    margin-right:0px;
    margin-left:120px;
    width:400px;
    height:40px;
    

`
const CustomInput = styled.input`
width:400px;
border-radius:20px;
padding:10px;
height:40px;

`
const CustomTextField = styled.div`
    margin-right: 0px;
    display:flex;
    // border:2px solid black;
    height:30px;


`
const CustomSearchIcon = styled.div`
    // border: 2px solid red;
    display:flex;
    position:absolute;
    flex-direction: column;
    m

    justify-content:center;
    align-items:center;
    cursor:pointer;
    // background-color: blue;
    border-radius:40px;
    margin-left:370px;
    margin-top:8px;
    width:30px;

`

export default Search;
