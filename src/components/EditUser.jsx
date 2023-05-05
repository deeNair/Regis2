
//import axios from "axios";
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { editUser, getUser} from "../service/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//const {id}=useParams();


// const Container = styled(FormGroup)`
// width: 50%;
// margin:5% auto 0 auto;`





const defaultValue = {
    name: "",
    username: "",
    email: "",
    phone: ""
}
//const useNavigate= navigate();
const Container = styled(FormGroup)`
  width: 50%;
    color:#615954;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
      }
`;

const EditUser = () => {
    const [user, setUser] = useState(defaultValue);
    const {id} = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        loadUserDetails();
    },[]);

    const loadUserDetails = async() =>{
        let response = await getUser(id);
        setUser(response.data);
        console.log(response.data);
        console.log(user);
      }
  

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        //   console.log (user)
    }
    

    /**const EditUserDetails =  (e) => {
        e.preventDefault();
         //navigate('/all');
         axios.post("http://localhost:3001/add", {
    user
    
      });
      window.location.reload();
     
    };*/

    const editUserDetails = async() => {
        //call the api  
      await editUser(user,id);
          navigate('/all');
      }


    
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
                <Button variant="contained" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}


export default EditUser;