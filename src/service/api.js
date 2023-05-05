//const axios=require('axios');
import axios from 'axios';

const URL="http://localhost:3001";

 export const addUser=async(data)=>{
    try{
        

return await axios.post(`${URL}/add`,data );

    }catch(error){
        console.log('error while calling',error);
    }
    }
export  const getUsers= async()=>{
    try {
       return await axios.get(`${URL}/all`)
    }catch (error){
        console.log('error while calling getUsers API', error);
    }
}
export const getUser= async(id)=>{
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log('error calling api',error);
    }
}
   export const editUser=async(user,id)=>{
        try{
            return await axios.post(`${URL}/${id}`, user)
        }
    catch (error){
        console.log(`Error while calling editUser api`, error);

    }
    }

    export const deleteUser =async(id)=>{
        try {
   
           return await axios.delete(`${URL}/${id}`);
           
        } catch (error) {
           console.log('error calling api',error);
        }
   }

    /*module.exports= {addUser,editUser,getUser,getUsers}*/