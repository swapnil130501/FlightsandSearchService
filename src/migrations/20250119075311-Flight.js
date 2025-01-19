'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('flights', 'arrivalTime', {
        type: Sequelize.DATE,
        allowNull: false,
        timezone: 'Asia/Kolkata'
    });

    await queryInterface.changeColumn('flights', 'departureTime', {
        type: Sequelize.DATE,
        allowNull: false,
        timezone: 'Asia/Kolkata'
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('flights', 'arrivalTime', {
        type: Sequelize.DATE,
        allowNull: false,
        timezone: 'Asia/Kolkata'
    });

    await queryInterface.changeColumn('flights', 'departureTime', {
        type: Sequelize.DATE,
        allowNull: false,
        timezone: 'Asia/Kolkata'
    });
  }
};
