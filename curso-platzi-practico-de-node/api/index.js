const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const config = require('../config.js');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(config.api.PORT, () => {
    console.log(`> Server listenning at ${config.api.API_BASE_URL}`);
});
