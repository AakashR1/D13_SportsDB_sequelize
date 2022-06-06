const express = require('express');
const routes = express.Router();
const playerController = require('../controller/playerController');
const updatevalidation = require('../middleware/UpdateValidation')
const ValidatePlayer = require('../middleware/PlayerValidatioin');


routes.post('/addPlayer',playerController.addPlayer);

routes.patch('/updatePlayerDetails/:PlayerId',updatevalidation,playerController.updatePlayerDetails);

routes.get('/getPlayer/:PlayerId',playerController.getPlayer);

routes.delete('/deletePlayer/:PlayerId',playerController.deletePlayer);

routes.get('/getAllPlayer',playerController.getAllPlayers);

routes.get('/playerWithTeam',playerController.playerWithTeam);



module.exports = routes;