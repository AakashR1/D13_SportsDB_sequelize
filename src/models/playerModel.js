
module.exports = (sequelize,DataTypes)=>{
    const Player = sequelize.define("Player",{
        player_id :{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        player_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        player_age:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        player_captain:{
            type:DataTypes.STRING,
            allowNull:false
        },
        player_DOB:{
            type:DataTypes.DATEONLY,
            allowNull:false
        }
    });
    return Player;
}