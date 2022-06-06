const db = require("../DB/db");
const Team = db.teams;
const Player = db.player;

const addPlayer =async (req, res) => {
    try {
        console.log(req.body);
        const user = await Player.create(req.body)
        res.send(`Player added...${user.player_id}`)

    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

const updatePlayerDetails = async(req, res) => {
    try {
        await Player.update(req.body,{where:{player_id:req.params.PlayerId}});
        res.send("Player updated...")

    } catch (error) {
        console.log(error);

    }
}

const getAllPlayers = async (req, res) => {
    try {
            const data = await Player.findAll();
            res.send(data);
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

const getPlayer = async(req, res) => {
    try {
            const playerDetails =  await Player.findOne({where:{player_id:req.params.PlayerId}})
            res.send(playerDetails);
     } catch (error) {
        res.send(error);
        console.log(error);
    }
}

const deletePlayer =async (req, res) => {
    try {
        await Player.destroy({where:{player_id:req.params.PlayerId}});
        res.send('deleted....');

    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

const playerWithTeam = async (req,res)=>{
    try {
        const data = await Player.findAll({include:Team});
        // console.log(data);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}


module.exports = {
    addPlayer,
    updatePlayerDetails,
    getAllPlayers,
    getPlayer,
    deletePlayer,
    playerWithTeam
}