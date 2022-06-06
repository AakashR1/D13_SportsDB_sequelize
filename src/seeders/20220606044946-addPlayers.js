'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Players', [
      {
        "player_name":"pritesh",
        "player_age":21,
        "player_captain":"Kohli",
        "player_DOB":"2000-11-02",
        "team_id":2,
        "createdAt":new Date(),
        "updatedAt":new Date()
    },
    {
      "player_name":"abhijeet",
      "player_age":21,
      "player_captain":"Kohli",
      "player_DOB":"2000-11-02",
      "team_id":1,
      "createdAt":new Date(),
      "updatedAt":new Date()
  },
  {
    "player_name":"ravi",
    "player_age":21,
    "player_captain":"Kohli",
    "player_DOB":"2000-11-02",
    "team_id":2,
    "createdAt":new Date(),
    "updatedAt":new Date()
  },
  {
    "player_name":"anup",
    "player_age":21,
    "player_captain":"Kohli",
    "player_DOB":"2000-11-02",
    "team_id":4,
    "createdAt":new Date(),
    "updatedAt":new Date()
  },
  {
    "player_name":"vishal",
    "player_age":21,
    "player_captain":"Kohli",
    "player_DOB":"2000-11-02",
    "team_id":3,
    "createdAt":new Date(),
    "updatedAt":new Date()
  },
  {
    "player_name":"shreayash",
    "player_age":21,
    "player_captain":"Kohli",
    "player_DOB":"2000-11-02",
    "team_id":3,
    "createdAt":new Date(),
    "updatedAt":new Date()
  },
  {
    "player_name":"mihir",
    "player_age":21,
    "player_captain":"Kohli",
    "player_DOB":"2000-11-02",
    "team_id":1,
    "createdAt":new Date(),
    "updatedAt":new Date()
  },
  {
    "player_name":"keyur",
    "player_age":21,
    "player_captain":"Kohli",
    "player_DOB":"2000-11-02",
    "team_id":5,
    "createdAt":new Date(),
    "updatedAt":new Date()
  },
  {
    "player_name":"mohit",
    "player_age":21,
    "player_captain":"Kohli",
    "player_DOB":"2000-11-02",
    "team_id":2,
    "createdAt":new Date(),
    "updatedAt":new Date()
  },
  {
    "player_name":"mayur",
    "player_age":21,
    "player_captain":"Kohli",
    "player_DOB":"2000-11-02",
    "team_id":1,
    "createdAt":new Date(),
    "updatedAt":new Date()
  }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

  await queryInterface.bulkDelete('Players', null, {});

  }
};
