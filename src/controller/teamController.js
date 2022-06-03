const db= require('../DB/db');
const Team = db.teams;

const addTeam =async (req, res) => {
    try {
       await Team.create(req.body);
        res.send('Team is added....')
    }
    catch (error) {
    res.send(error);
    console.log(error);
}
}

const updateTeam = async(req,res)=>{
    try {
        
            await Team.update(req.body,{where:{team_id : req.params.Id}})
            res.send('updated...')
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

const getAllTeamsAndId =async (req,res)=>{
    try {   
        console.log('here');
            const result = await Team.findAll();
            res.send(result)
    } catch (error) {
        
    }
}

const getTeamName = (req,res)=>{
    try {
        console.log(req.params.id);
        connection.execute(
            `SELECT * FROM teams WHERE team_id = "${req.params.Id}"`,
            function (err,result){
                res.send(result)
            }
        )
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

const deleteTeam =async (req,res)=>{
    try {
            await Team.destroy({where:{team_id : req.params.Id}})
            res.send('deleted....')

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addTeam,
    updateTeam,
    getAllTeamsAndId,
    getTeamName,
    deleteTeam
}