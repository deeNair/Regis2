import {Table, Styled, StyledTable, TableHead, TableBody, TableRow, TableCell, Button,}from '@mui/material';
import { useEffect, useState } from 'react';
 import {getUsers,deleteUser} from '../service/api';

 import {Link} from 'react-router-dom';

const AllUsers=()=>{
    const [users,setUsers]=useState([])

    useEffect(()=>{
        getAllUsers();
      }, []);


    const getAllUsers=async()=>{
        let response = await getUsers();
        setUsers(response.data); 
        console.log(response.data);
    }
    const deleteUsers=async(id)=>{
      await deleteUser(id);
      getAllUsers();
    }
        
    return(
        <Table>
          <TableHead>
            <TableRow>
               <TableCell>Name</TableCell>
               <TableCell>Username</TableCell>
               <TableCell>Email</TableCell>
               <TableCell>Phone</TableCell>
               <TableCell>Edit</TableCell>
        <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {
              users.map((user) =>(
                <TableRow key={user._id}>
                      <TableCell>{user._id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Button variant="contained" component={Link} to={`/edit/${user._id}`}>Edit
                    </Button>
                    </TableCell>
              <TableCell>
                    <Button variant="contained" onClick={()=>deleteUsers(user._id)}>Delete</Button>
                  </TableCell>
                  </TableRow>
              ))
              }

           </TableBody>
        </Table>
    )
}

export default AllUsers;