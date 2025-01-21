'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Airplanes', [
            { modelNumber: 'Boeing 747', capacity: 400, createdAt: new Date(), updatedAt: new Date() },
            { modelNumber: 'Airbus A320', capacity: 200, createdAt: new Date(), updatedAt: new Date() },
            { modelNumber: 'Boeing 777', capacity: 300, createdAt: new Date(), updatedAt: new Date() },
            { modelNumber: 'Airbus A380', capacity: 800, createdAt: new Date(), updatedAt: new Date() },
            { modelNumber: 'Boeing 737', capacity: 150, createdAt: new Date(), updatedAt: new Date() },
        ]);
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Airplanes', null, {});
    }
};
