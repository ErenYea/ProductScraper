import React, { useState, useEffect } from "react";
import {useFetch} from "../customhook/2-useFetch";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Tables = () =>{
    const {loading,products} = useFetch('http://localhost:3001/table');
    console.log(products[0]);
   

    if (loading){
        return (
            <div className="container">
                <Box sx={{ display: 'flex' }}>
                <CircularProgress />
                </Box>
            </div>
        )
    } else {
        console.log(products[0].data[0]);
        return (
            <div className="review">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 850 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Type</TableCell>
                            
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {products[0].data[0].map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                            
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }



}
export default Tables;