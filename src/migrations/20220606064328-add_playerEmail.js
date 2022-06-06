'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addColumn('Players','Player_email',{
        type:Sequelize.STRING,
        allowNull: false
      })
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn('Players','Player_email');

  }
};
