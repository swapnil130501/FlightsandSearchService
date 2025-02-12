const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
const {City, Airport} = require('./models/index');

const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        if(process.env.SYNC_DB) {
            db.sequelize.sync({alter: true});
        }
        console.log(swaggerSpec);
    });
}

setupAndStartServer();