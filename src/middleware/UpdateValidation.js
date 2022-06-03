const ValidatePlayer = (req,res,next)=>{

    const {player_name,player_age,player_captain,player_DOB} = req.body;
    var timestamp
    if(player_DOB != undefined){
        timestamp = Date.parse(player_DOB);
        if (isNaN(timestamp) == false) {
        var d = new Date(timestamp);
    }
    }   
 
    if(!isNaN(player_name)){
       return res.send("Player name can not be empty or number");
    }
    
     if(!isNaN(player_captain)){
        return res.send("Captain name can not be empty or number");
     }
     if(String(timestamp) == 'NaN'){
        return res.send("Player DOB ignle digit or string");
     }
    next()
}




module.exports = ValidatePlayer;
