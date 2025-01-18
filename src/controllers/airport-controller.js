const { AirportService } = require('../services/index');
const { StatusCodes } = require('http-status-codes');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(StatusCodes.CREATED).json({
            message: 'Successfully created the airport',
            err: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot create a new airport'
        })
    }
}

const getAll = async (req, res) => {
    try {
        const response = await airportService.getAll();
        return res.status(StatusCodes.OK).json({
            message: 'Successfully created the airport',
            err: {},
            data: response,
            success: true 
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot create a new airport'
        })
    }
}

module.exports = {
    create,
    getAll
}