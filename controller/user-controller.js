const Nobs=require('../models/user-schema')

 const addUser= async(request,response)=>{
    const nob=request.body;

    const newUser= new Nobs(nob);
    
    try {
          await newUser.save();
        response.status(201).json(newUser);
    } catch(error){
        response.status(404).json({message:error.message})
    }
}

 const getUsers= async(request,response)=> {
    try {
        const users= await Nobs.find({});
        response.status(200).json(users);
    }catch (error){
        response.status(404).json({message:error.message})
    }
    }
    
    const getUser=async(request,response)=>{
        try {
            const users= await Nobs.findById(request.params.id);
            response.status(200).json(users);
        }catch (error){
            response.status(404).json({message:error.message})
        }
    }


    const editUser= async(request, response)=> {
        const user=request.body;
   const editedUser=new Nobs(user);
        try {
            await Nobs.updateOne({_id:request.params.id},editedUser);
            //response.status(201).json(editedUser);
            response.status(201).json(editedUser);
        } catch (error) {
            response.status(404).json({message:error.message})
        }
        }
        const deleteUser=async(request,response)=>{

            try {
         
               await Nobs.deleteOne({_id:request.params.id});
               response.status(200).json({message:'user deleted'})
            } catch (error) {
               response.status(404).json({message:error.message});
            }
         }

         module.exports = {
            addUser,
            getUsers,
            getUser,
            editUser,
            deleteUser
            }