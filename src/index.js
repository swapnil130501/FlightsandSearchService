const express = require("express");
const bodypasrser = require('body-parser');

const ApiRoutes = require('./routes/index');
const { PORT } = require('./config/serverConfig')

const setupAndStartServer = async() => {
    
    //create the express object
    const app = express();
    
    app.use(bodypasrser.json());
    app.use(bodypasrser.urlencoded({extended: true}));

    app.use('./api', ApiRoutes);

    app.listen(PORT, async() => {
        console.log(`server started at ${PORT}`);
    });
}
setupAndStartServer();