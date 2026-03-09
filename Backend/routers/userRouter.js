const express = require('express');
const { getUserById, getUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');

const userRouters = express.Router();

userRouters.get('/',getUsers);
userRouters.get('/:id',getUserById);
userRouters.post('/create',createUser);
userRouters.put('/update/:id',updateUser);
userRouters.delete('/delete/:id',deleteUser);

module.exports = userRouters