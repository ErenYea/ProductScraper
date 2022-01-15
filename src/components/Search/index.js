import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    const [text,setText] = useState('')
    const Searchthis = (te) =>{
        console.log(te)
    }
  
  return (
      <CustomSearch>
          
          <CustomTextField>
              <TextField id="outlined-basic" label="Search here" variant="outlined"  value={text} onChange={(e)=>{setText(e.target.value)}} fullWidth/>
              <CustomSearchIcon>
                <SearchIcon  onClick={()=>Searchthis(text)} sx={{ color: "black" }}/>
              </CustomSearchIcon>
              
          </CustomTextField>
          
      </CustomSearch>
  );
};

const CustomSearch = styled.div`
    background:white;
    border-radius:10px; 
    display:flex;
    justify-content:space-between;
    margin-right:0px;
    margin-left:100px;
    // width:300px;
    

`

const CustomTextField = styled.div`
    margin-right: 0px;
    display:flex;
    
    

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
    margin-left:180px;
    margin-top:15px;
    width:30px;

`

export default Search;
