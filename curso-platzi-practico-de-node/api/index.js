const express = require('express');
const cors = require('cors');
const expressJSDocSwagger = require('express-jsdoc-swagger');

const routes = require('./routes');
const config = require('../config.js');
const SWAGGER_CONFIG = require('../swagger');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

expressJSDocSwagger(app)(SWAGGER_CONFIG);

routes(app);

app.listen(config.api.PORT, () => {
    console.log(`> Server listenning at ${config.api.API_BASE_URL}`);
    console.log(
        `> Documentation at ${config.swagger.documentationApi.ui} and ${config.swagger.documentationApi.json}`,
    );
});