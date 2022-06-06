
module.exports = (sequelize,DataTypes)=>{
    const Player = sequelize.define("Player",{
        player_id :{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        player_name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notNull:{
                    msg:'please enter the player name this can not be null'
                },
                ValueCheck(value){
                    if(value === ""){
                        throw new Error("Value can not be blank");

                    }
                }
            }
        },
        player_age:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        player_captain:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                isIn: [['sachin','kohli']],   
            }
        },
        player_DOB:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        Player_email:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        team_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                teamIsIn(value){
                    if(value<1 || value>3){
                        throw new Error('team_id can not be greate then 3 and less then 1');
                    }
                }
            }
        }

    });
    return Player;
}