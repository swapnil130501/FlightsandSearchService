'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Airports', [
            { name: 'JFK International Airport', address: 'Queens, NY', cityId: 1, createdAt: new Date(), updatedAt: new Date() },
            { name: 'LAX Airport', address: 'Los Angeles, CA', cityId: 2, createdAt: new Date(), updatedAt: new Date() },
            { name: 'O Hare International Airport', address: 'Chicago, IL', cityId: 3, createdAt: new Date(), updatedAt: new Date() },
            { name: 'George Bush Intercontinental Airport', address: 'Houston, TX', cityId: 4, createdAt: new Date(), updatedAt: new Date() },
            { name: 'San Francisco International Airport', address: 'San Francisco, CA', cityId: 5, createdAt: new Date(), updatedAt: new Date() },
        ]);
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Airports', null, {});
    }
};
