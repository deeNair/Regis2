
//import axios from "axios";
import React from 'react';
import { useState } from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";

import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";


const defaultValue = {
    name: "",
    username: "",
    email: "",
    phone: ""
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
    }
`;
//const useNavigate= navigate();
const AddUser = () => {
const [user,setUser] =useState(defaultValue);
      
    let navigate = useNavigate();

    const onValueChange = (e) => {
setUser({...user, [e.target.name]:e.target.value })

console.log (e.target.name)
          console.log (user);

    }


    const addUserDetails = async() => {
       
       await addUser(user);
       console.log(user);
       //navigate('/all');
     
    };
    
        return (
         <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=> addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}


export default AddUser;