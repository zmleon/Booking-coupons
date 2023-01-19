const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});

const doc = {
    info: {
        version: '',      // by default: '1.0.0'
        title: 'Medic API',        // by default: 'REST API'
        description: 'Web application for booking talons',  // by default: ''
    },
    host: '',      // by default: 'localhost:3000' -- NO! by default empty (but used current host)!
    basePath: '',  // by default: '/'
    schemes: [],   // by default: ['http']
    consumes: [],  // by default: ['application/json']
    produces: [],  // by default: ['application/json']
    tags: [        // by default: empty Array
        {
            name: 'Users',         // Tag name
            description: 'Users API',  // Tag description
        },
        {
            name: 'Talons',         // Tag name
            description: 'Talons API',  // Tag description
        },
        {
            name: 'Doctors',         // Tag name
            description: 'Doctors API',  // Tag description
        },
        {
            name: 'Hospitals',         // Tag name
            description: 'Hospitals API',  // Tag description
        },
        {
            name: 'Feedback',         // Tag name
            description: 'Reviews API',  // Tag description
        },
        {
            name: 'Booked',         // Tag name
            description: 'Booked API',  // Tag description
        }
        // { ... }
    ],
    securityDefinitions: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
        }
    },  // by default: empty object (Swagger 2.0)
    definitions: {},          // by default: empty object
    components: {}            // by default: empty object (OpenAPI 3.x)
};


const outputFile = 'src/swagger/swagger.json';
const endpointsFiles = ['./src/loader/Routing.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);