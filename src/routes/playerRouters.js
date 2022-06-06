const express = require('express');
const routes = express.Router();
const playerController = require('../controller/playerController');
const updatevalidation = require('../middleware/UpdateValidation')
const ValidatePlayer = require('../middleware/PlayerValidatioin');


routes.post('/addPlayer',ValidatePlayer,playerController.addPlayer);

routes.patch('/updatePlayerDetails/:PlayerId',updatevalidation,playerController.updatePlayerDetails);

routes.get('/getPlayer/:PlayerId',playerController.getPlayer);

routes.delete('/deletePlayer/:PlayerId',playerController.deletePlayer);

routes.get('/getAllPlayer',playerController.getAllPlayers);



module.exports = routes;