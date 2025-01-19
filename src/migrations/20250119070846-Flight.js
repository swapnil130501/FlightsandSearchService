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

    await queryInterface.changeColumn('flights', 'arrivalAirportId', {
        type: Sequelize.STRING,
        allowNull: false
    });

    await queryInterface.changeColumn('flights', 'departureAirportId', {
        type: Sequelize.STRING,
        allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('flights', 'arrivalAirportId', {
        type: Sequelize.STRING,
        allowNull: false
    });

    await queryInterface.changeColumn('flights', 'departureAirportId', {
        type: Sequelize.STRING,
        allowNull: false
    });
  }
};
