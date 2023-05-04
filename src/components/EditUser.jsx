
import axios from "axios";
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { useState, useEffect,  } from "react";
import { editUser} from "../service/api";
import { useParams } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//const {id}=useParams();


// const Container = styled(FormGroup)`
// width: 50%;
// margin:5% auto 0 auto;`

const {User, setUser}=useState(defaultValue);
useEffect(()=>{
    loadUserDetails();
},[])

const EditUserDetails= async()=>{
    await EditUser(id);
    Navigate('/all');
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
                <Input onChange={(e) => onValueChange(e)} name="name" value= {user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" value={user.username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value= {user.email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value= {user.phone}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => EditUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}


export default EditUser;