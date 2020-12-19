const CONFIG = require('./config');

const SWAGGER_CONFIG = {
    swagger: '2.0',
    info: {
        version: '1.0.0',
        title: 'platzi-posts',
        description: 'A social backend with NodeJS',
        licence: {
            name: 'MIT',
        },
    },
    security: {
        BasicAuth: {
            type: 'http',
            scheme: 'basic',
        },
    },
    externalDocs: {
        description: 'Find out more about Swagger',
        url: 'http://swagger.io',
    },

    filesPattern: './**/*.js', // Glob pattern to find your jsdoc files (it supports arrays too ['./**/*.controller.js', './**/*.route.js'])
    swaggerUIPath: CONFIG.swagger.swaggerUIPath, // SwaggerUI will be render in this url. Default: '/api-docs'
    baseDir: __dirname,
    exposeSwaggerUI: CONFIG.isDev, // Expose OpenAPI UI. Default true
    exposeApiDocs: CONFIG.isDev, // Expose Open API JSON Docs documentation in `apiDocsPath` path. Default false.
    apiDocsPath: CONFIG.swagger.apiDocsPath, // Open API JSON Docs endpoint. Default value '/v3/api-docs'.
};

module.exports = SWAGGER_CONFIG;
