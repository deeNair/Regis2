import axios from "axios";

const URL="/api/users";

export const addUser= async (data)=>{
    try{
        return await axios.post(`${URL}/add`, data);
    } catch (error){
        console.log('Error while calling add User Api', error);
    }
    }
export const getUsers= async()=>{
    try {
       return await axios.get(`${URL}/all`)
    }catch (error){
        console.log('error while calling getUsers API', error)
    }
}
