//* Request handler Logic
const User= require('../../schema/user-schema');
 const addUser= async(req, res)=>{

    
    try {
        const user= await User.create(req.body);
        res.status(201).json(user);
    } catch(error){
        res.status(404).json({message:error.message})
    }
}

 const getUsers= async(req, res)=> {
    try {
        const users= await User.find({});
        response.status(200).json(users);
    }catch (error){
        response.status(404).json({message:error.message})
    }
    }

    const editUsers= async(req, res)=> {
        try {
            const users= await User.findById(request.params.id);
            response.status(200).json(users);
        }catch (error){
            response.status(404).json({message:error.message})
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
    getUsers

}