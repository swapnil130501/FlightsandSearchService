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
            return res.status(400).json({
                data: {},
                success: false,
                message: 'Invalid request body to create a flight',
                err: 'Missing mandotory properties to create a flight'
         });
    }
    next();
}
module.exports = {
    validateCreateFlight
}