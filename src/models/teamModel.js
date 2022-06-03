
module.exports = (sequelize,DataTypes)=>{
    const Team = sequelize.define("Team",{
        team_id :{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        team_name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Team;
}