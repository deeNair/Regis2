const express = require('express');
const router = express.Router();
//const {addUser,getUsers,getUser,editUser,deleteUser} = require ('../../controllers/api/users');

const {addUser,getUsers,getUser,editUser,deleteUser} = require ('../controller/user-controller');

router.post('/add',addUser);
router.get('/all',getUsers);
router.get('/:id', getUser);
router.post('/:id', editUser);
router.delete('/:id',deleteUser);

module.exports =router;