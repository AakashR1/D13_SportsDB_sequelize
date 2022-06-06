const express = require('express');
const routes = express.Router();
const teamController = require('../controller/teamController');


routes.post('/addTeam',teamController.addTeam);

routes.patch('/updateTeamName/:Id',teamController.updateTeam);

routes.get('/getTeam/:Id',teamController.getTeamName);

routes.get('/allTeams',teamController.getAllTeamsAndId);

routes.delete('/deleteTeam/:Id',teamController.deleteTeam);

routes.get('/teamWithPlayer',teamController.rowQuery1);

routes.get('/rowQuery2',teamController.rowQuery2);

routes.get('/rowQuery3',teamController.rowQuery3);

module.exports = routes;