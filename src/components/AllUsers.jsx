import {Table, Styled, StyledTable, TableHead, TableBody, TableRow, TableCell, Button,}from '@mui/material';
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
               <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
             {/* {
              users.map(user =>(
                <TBody>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Button variant="contained" styled= {{marginRight:10}}component={Link} to(`/edit/$/user._Name`)>Edit</Button>
                    <Button variant="contained" color="secondary">Delete</Button>
                  </TableCell>
                </TBody>
              )) */}
             

           </TableBody>
        </Table>
    )
}

export default AllUsers