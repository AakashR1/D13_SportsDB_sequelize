'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Players','team_id',{
      type:Sequelize.INTEGER,
      allowNull:false,
      references: {
        model: 'Teams',
        key: 'team_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },
  async down (queryInterface, Sequelize){
    await queryInterface.removeColumn('Players','team_id');
  }
};
