//* Request handler Logic

const User=require('../../models/user-schema')

 const addUser= async(request,response)=>{
    const user=request.body;

    const newUser= new User(user);
    
    try {
          await newUser.save();
        response.status(201).json(newUser);
    } catch(error){
        response.status(404).json({message:error.message})
    }
}

 const getUsers= async(request,response)=> {
    try {
        const users= await User.find({});
        response.status(200).json(users);
    }catch (error){
        response.status(404).json({message:error.message})
    }
    }
    
    const getUser=async(request,response)=>{
        try {
            const users= await User.findById(request.params.id);
            response.status(200).json(users);
        }catch (error){
            response.status(404).json({message:error.message})
        }
    }


    const editUser= async(request, response)=> {
        const user=request.body;
   const editedUser=new User(user);
        try {
            await User.updateOne({_id:request.params.id},editedUser);
            //response.status(201).json(editedUser);
            response.status(201).json(editedUser);
        } catch (error) {
            response.status(404).json({message:error.message})
        }
        }
        const deleteUser=async(request,response)=>{

            try {
         
               await User.deleteOne({_id:request.params.id});
               response.status(200).json({message:'user deleted'})
            } catch (error) {
               response.status(404).json({message:error.message});
            }
         }


const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//* /*-- Helper Functions --*/
function createJWT(user) {
    return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'});
}

async function create(req, res) {
    // console.log('[From POST handler]', req.body)
    try {
        //* creating a new user
        const user = await User.create(req.body);
        console.log(user);

        //* creating a new jwt
        const token = createJWT(user);

        res.json(token);
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}


async function login(req, res) {
    try {
        // find user in db
      const user = await User.findOne({ email: req.body.email });
      // check if we found an user
      if (!user) throw new Error();
      // compare the password to hashed password
      const match = await bcrypt.compare(req.body.password, user.password);
      // check is password matched
      if (!match) throw new Error();
      // send back a new token with the user data in the payload
      res.json( createJWT(user) );
    } catch {
      res.status(400).json('Bad Credentials');
    }
  }


async function checkToken(req, res) {
    console.log(req.user);
    res.json(req.exp)
}


module.exports = {
    create,
    login,
    checkToken,
    addUser,
    getUsers,
    getUser,
    editUser,
    deleteUser
    }