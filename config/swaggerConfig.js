const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const swaggerOptions = {
    definition: {
        openapi: '3.1.0', 
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Documentation pour l\'API',
        },
        servers: [
            {
                url: 'http://localhost:9000', 
                description: 'Serveur de développement',
            },
        ],
    },
    apis: ['./routes/*.js',"./models/*.js"], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerDocs, swaggerUi };
