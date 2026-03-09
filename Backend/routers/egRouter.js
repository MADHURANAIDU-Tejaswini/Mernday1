const express = require('express');
const { getController, postController, putController, deleteController } = require('../controllers/egController');

const egRouters = express.Router();
egRouters.get('/',getController)
egRouters.post('/',postController)
egRouters.put('/',putController)
egRouters.delete('/',deleteController)

module.exports = egRouters;