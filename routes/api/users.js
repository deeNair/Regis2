//* Routing Logic

const addUse= require ('../../controllers/api/users')
const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

//const ensureLoggedIn = require('../../config/ensureLoggedIn');


//* POST 
//router.post('/', usersCtrl.create);

router.post('/add', usersCtrl.addUser);
router.get('/all', usersCtrl.getUsers);
//router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);



module.exports = router;