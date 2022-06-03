const dotenv = require('dotenv').config();
const env = dotenv['parsed']['NODE_ENV'];
const config = require('../config/dbConfig.json')[env];
const res = require('express/lib/response');
const {Sequelize , DataTypes} = require('sequelize');

const sequelize = new Sequelize(config.database, config.user, config.password, config);

const authenticate =async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection done....');
  } catch (error) {
    res.send(error)
  }
}
authenticate();

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.teams = require('../models/teamModel')(sequelize,DataTypes);
db.player = require('../models/playerModel')(sequelize,DataTypes);

db.sequelize.sync({force:false})
.then(()=>{
  console.log('sync is done....');
})

module.exports = db;