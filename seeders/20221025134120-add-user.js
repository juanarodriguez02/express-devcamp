'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'john@misena.edu.co',
        password: '1234'
      },
      {
        name: 'Juana',
        email: 'juana@misena.edu.co',
        password: '2244'
      }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});
  }
};
