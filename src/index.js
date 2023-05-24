const express = require("express");
const bodypasrser = require('body-parser');

const CityRepository = require('./repository/city-repository');
const { PORT } = require('./config/serverConfig')

const setupAndStartServer = async() => {
    
    //create the express object
    const app = express();
    
    app.use(bodypasrser.json());
    app.use(bodypasrser.urlencoded({extended: true}));

    app.listen(PORT, async() => {
        console.log(`server started at ${PORT}`);
        const repo = new CityRepository();
        repo.createCity({name: "New Delhi"});
    });
}
setupAndStartServer();