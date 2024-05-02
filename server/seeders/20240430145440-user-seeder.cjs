'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     
      Example:
      await queryInterface.bulkInsert('Users', [
        {
          email: "markjosephtiempo@gmail.com",
          username: 'gongskie',
          password: 'tobolka123',
          display_name: "mark",
          createdAt: new Date(),
          updatedAt: new Date()
        }]
     , {});
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
