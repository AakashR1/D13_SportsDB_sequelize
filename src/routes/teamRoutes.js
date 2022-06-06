const express = require('express');
const routes = express.Router();
const teamController = require('../controller/teamController');


routes.post('/addTeam',teamController.addTeam);

routes.patch('/updateTeamName/:Id',teamController.updateTeam);

routes.get('/getTeam/:Id',teamController.getTeamName);

routes.get('/allTeams',teamController.getAllTeamsAndId);

routes.delete('/deleteTeam/:Id',teamController.deleteTeam)

routes.get('/teamWithPlayer',teamController.teamWithPlayer)

module.exports = routes;