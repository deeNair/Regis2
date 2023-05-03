
import axios from "axios";
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { useState, useEffect,  } from "react";
import { addUser, getUser } from "../service/api";
//import { useNavigate } from "react-router-dom";
const {Name}=useParams();
import { useParams } from "react-router-dom";

const Container = styled(FormGroup)`
width: 50%;
margin:5% auto 0 auto;`

useEffect(()=>{
    loadUserDetails();
},[])

const loadUserDetails= async()=>{
    const response =await getUsers(Name);
}

const defaultValue = {
    name: "",
    username: "",
    email: "",
    phone: ""
}
//const useNavigate= navigate();
const EditUser = () => {
    const [user, setUser] = useState(defaultValue);

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        //   console.log (user)
    }
    

    const EditUserDetails =  (e) => {
        e.preventDefault();
         //navigate('/all');
         axios.post("http://localhost:3001/add", {
    user
    
      });
      window.location.reload();
     
    };
    
        return (
         <Container>
            <Typography variant="h4">Edit User</Typography>
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
                <Button variant="contained" onClick={() => EditUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}


export default EditUser;