const db= require('../DB/db');
const Team = db.teams;
const Player = db.player;
const sequelize = db.sequelize;
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

const teamWithPlayer = async (req,res)=>{
    try {
        const data = await Team.findAll({include:Player});
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

const rowQuery1 =async (req,res)=>{
    try {
        const [results, metadata]  = await sequelize.query('SELECT Players.player_name, Players.player_email , Teams.team_name  FROM Teams JOIN Players ON Players.team_id = Teams.team_id');
        console.log(results);
    } catch (error) {
        console.log(error);
    }
}

const rowQuery2 =async (req,res)=>{
    try {
        const [results, metadata]  = await sequelize.query('SELECT team_name AS "A.b.c" FROM Teams WHERE team_id IN(:status)',
        {
          replacements: { status: [1,3] },
          nest:true
        }
      );
        console.log(results);
    } catch (error) {
        console.log(error);
    }
}
rowQuery2();
const rowQuery3 =async (req,res)=>{
    try {
        const [results, metadata]  = await sequelize.query('SELECT team_name FROM Teams WHERE team_id  = $',
        {
          replacements: { status: [1,3] },
          nest:true
        }
      );
        console.log(results);
    } catch (error) {
        console.log(error);        
    }
}



module.exports = {
    addTeam,
    updateTeam,
    getAllTeamsAndId,
    getTeamName,
    deleteTeam,
    teamWithPlayer,
    rowQuery1,
    rowQuery2,
    rowQuery3
}