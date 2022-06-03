const ValidatePlayer = (req,res,next)=>{

    const {player_name,player_age,player_captain,player_DOB} = req.body;
    var timestamp = Date.parse(player_DOB);
    if (isNaN(timestamp) == false) {
    var d = new Date(timestamp);
    }
 
    if(["",undefined].includes(player_name) || !isNaN(player_name)){
       return res.send("Player name can not be empty or number");
    }
    if(["",undefined].includes(player_age)){
        return res.send("Player age can not be empty or String");
     }
     if(["",undefined].includes(player_captain) || !isNaN(player_captain)){
        return res.send("Captain name can not be empty or number");
     }
     if(  ["",undefined].includes(player_captain) || String(timestamp) == 'NaN'){
        return res.send("Player DOB can not be empty or signle digit or string");
     }
    next()
}




module.exports = ValidatePlayer;
