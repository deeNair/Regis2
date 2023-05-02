import {Table, TableHead, TableBody, TableRow, TableCell}from '@mui/material';
import { useEffect, useState } from 'react';
 import {getUsers} from'../service/api';



const AllUsers=()=>{
    const [users, setUsers]=useState([])

    useEffect(()=>{
        getAllUsers();
      }, []);


    const getAllUsers= async()=>{
        let response =await getUsers();
        setUsers(response.data);

    }
        
    return(
        <Table>
          <TableHead>
            <TableRow>
               <TableCell>Name</TableCell>
               <TableCell>Username</TableCell>
               <TableCell>Email</TableCell>
               <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>

        </Table>
    )
}

export default AllUsers