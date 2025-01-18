const { ClientErrorsCodes } = require('../utils/error-code');
const axios = require('axios');

const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
        ){
            return res.status(ClientErrorsCodes.BAD_REQUEST).json({
                data: {},
                success: false,
                message: 'Invalid request body to create a flight',
                err: 'Missing mandotory properties to create a flight'
         });
    }
    next();
}

const validateTokenAndRoleMiddleware = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token']
        console.log(token);
        if (!token) {
            return res.status(401).json({
                message: 'Unauthorized: No token provided',
                success: false,
                err: {}
            });
        }

        const userServiceUrl = process.env.USER_SERVICE_URL || 'http://localhost:3001/api/v1';
        const response = await axios.post(`${userServiceUrl}/auth/verify-admin`, { token });

        if (!response.data.success || !response.data.isAdmin) {
            return res.status(403).json({
                message: 'Forbidden: Admin access required',
                success: false,
                err: {}
            });
        }

        req.user = response.data.user;
        next();
    } catch (error) {
        console.error('Error in authorization middleware:', error.message);
        return res.status(500).json({
            message: 'Internal server error',
            success: false,
            err: error.message
        });
    }
};

module.exports = {
    validateCreateFlight,
    validateTokenAndRoleMiddleware
}