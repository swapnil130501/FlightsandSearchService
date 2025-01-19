const {FlightRepository, AirplaneRepository} = require('../repository/index');
const { compareTime } = require('../utils/helper');
const { Op } = require('sequelize');

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity 
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAllFlightData(query) {
        // trips - MUM - DEL
        try {
            let customFilter = {};
            const endingTripTime = " 23:59:00";

            if (query.trips && query.trips.includes('-')) {
                const [departureAirportId, arrivalAirportId] = query.trips.split('-');
                customFilter.departureAirportId = departureAirportId.trim();
                customFilter.arrivalAirportId = arrivalAirportId.trim();
            } else if (query.trips) {
                throw new Error("Invalid trips format. Use 'DEP-ARR' format.");
            }

            if(query.price) {
                const [minPrice, maxPrice] = query.price.split('-');
                console.log(minPrice, maxPrice);
                customFilter.price = {
                    [Op.between]: [minPrice, (maxPrice === undefined) ? 20000 : maxPrice]
                }
            }

            if(query.travellers) {
                customFilter.totalSeats = {
                    [Op.gte]: query.travellers
                }
            }

            if(query.tripDate) {
                const tripDateStart = query.tripDate; 
                const tripDateEnd = query.tripDate + endingTripTime;
          
                customFilter.departureTime = {
                  [Op.between]: [tripDateStart, tripDateEnd] 
                };
              }

            const flights = await this.flightRepository.getAllFlights(customFilter);
            return flights;
        } catch (error) {
            console.log(query)
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async updateFlight(flightId, data) {
        try {
            const response = await this.flightRepository.updateFlights(flightId, data);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = FlightService;

/**
 * {
 *   flightNumber,
 *   airplaneId,
 *   departureAirportId,
 *   arrivalAirportId,
 *   arrivalTime,
 *   departureTime,
 *   price
 *   totalSeats -> airplane
 * }
 */