const axios=require('axios');

const URL="http://localhost:3001";

 const addUser= async(data)=>{
    try{
        return await axios.post(`${URL}/add`, data);
    } catch (error){
        console.log('Error while calling add User Api', error);
    }
    }
 const getUsers= async()=>{
    try {
       return await axios.get(`${URL}/all`)
    }catch (error){
        console.log('error while calling getUsers API', error)
    }
}
 const getUser= async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`);
    }catch (error){
        console.log('Error while calling getUser api', error);
    }
}
   const editUser=async(user,id)=>{
        try{
            return await axios.post(`${URL}/${id}`, user)
        }
    catch (error){
        console.log(`Error while calling editUser api`, error);

    }
    }

    module.exports= {addUser,editUser,getUser,getUsers}