const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "My API",
            description: "API Documentation",
            version: "1.0.0",
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1",  
                description: "Local server",
            }
        ]
    },
    apis: ["./src/docs/*.js"],
};
  
const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;
