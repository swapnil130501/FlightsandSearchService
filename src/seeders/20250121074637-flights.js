'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Flights', [
        {
            flightNumber: 'NY100',
            airplaneId: 1,
            departureAirportId: 1,
            arrivalAirportId: 2,
            departureTime: new Date('2025-01-22T10:00:00Z'),
            arrivalTime: new Date('2025-01-22T14:00:00Z'),
            price: 500,
            boardingGate: 'A1',
            totalSeats: 400,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            flightNumber: 'LA200',
            airplaneId: 2,
            departureAirportId: 2,
            arrivalAirportId: 3,
            departureTime: new Date('2025-01-22T12:00:00Z'),
            arrivalTime: new Date('2025-01-22T16:00:00Z'),
            price: 300,
            boardingGate: 'B2',
            totalSeats: 200,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            flightNumber: 'CH300',
            airplaneId: 3,
            departureAirportId: 3,
            arrivalAirportId: 4,
            departureTime: new Date('2025-01-22T15:00:00Z'),
            arrivalTime: new Date('2025-01-22T19:00:00Z'),
            price: 400,
            boardingGate: 'C3',
            totalSeats: 300,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            flightNumber: 'HO400',
            airplaneId: 4,
            departureAirportId: 4,
            arrivalAirportId: 5,
            departureTime: new Date('2025-01-22T18:00:00Z'),
            arrivalTime: new Date('2025-01-22T22:00:00Z'),
            price: 600,
            boardingGate: 'D4',
            totalSeats: 800,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            flightNumber: 'SF500',
            airplaneId: 5,
            departureAirportId: 5,
            arrivalAirportId: 1,
            departureTime: new Date('2025-01-22T20:00:00Z'),
            arrivalTime: new Date('2025-01-23T00:00:00Z'),
            price: 700,
            boardingGate: 'E5',
            totalSeats: 150,
            createdAt: new Date(),
            updatedAt: new Date()
        },
    ]);
},

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Flights', null, {});
    }
};
