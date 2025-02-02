/**
 * @swagger
 * /city:
 *   post:
 *     summary: Create a new city
 *     description: Adds a new city to the system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created the city
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /city/{id}:
 *   delete:
 *     summary: Delete a city by ID
 *     description: Deletes an existing city from the system
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the city to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully deleted the city
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /city/{id}:
 *   get:
 *     summary: Get a city by ID
 *     description: Retrieves details of a city by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the city to fetch
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully fetched the city
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: City data
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /city/{id}:
 *   patch:
 *     summary: Update a city by ID
 *     description: Updates details of a city by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the city to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated the city
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /city:
 *   get:
 *     summary: Get all cities
 *     description: Retrieves a list of all cities
 *     parameters:
 *       - in: query
 *         name: page
 *         description: Page number for pagination
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         description: Limit number of cities per page
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully fetched all cities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   country:
 *                     type: string
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /airports:
 *   post:
 *     summary: Create a new airport
 *     description: Adds a new airport to the system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               location:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created the airport
 *       500:
 *         description: Internal server error
 *
 *   get:
 *     summary: Get all airports
 *     description: Retrieves a list of all airports
 *     responses:
 *       200:
 *         description: Successfully fetched all airports
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /flights:
 *   post:
 *     summary: Create a new flight
 *     description: Adds a new flight to the system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               flightNumber:
 *                 type: string
 *               airplaneId:
 *                 type: integer
 *               departureAirportId:
 *                 type: integer
 *               arrivalAirportId:
 *                 type: integer
 *               arrivalTime:
 *                 type: string
 *                 format: date-time
 *               departureTime:
 *                 type: string
 *                 format: date-time
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Successfully created the flight
 *       500:
 *         description: Internal server error
 *
 *   get:
 *     summary: Get all flights
 *     description: Retrieves a list of all flights
 *     responses:
 *       200:
 *         description: Successfully fetched all flights
 *       500:
 *         description: Internal server error
 *
 * /flights/{id}:
 *   get:
 *     summary: Get a flight by ID
 *     description: Retrieves details of a flight by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the flight to fetch
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully fetched the flight
 *       500:
 *         description: Internal server error
 *
 *   patch:
 *     summary: Update a flight by ID
 *     description: Updates details of a flight by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the flight to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Successfully updated the flight
 *       500:
 *         description: Internal server error
 */
