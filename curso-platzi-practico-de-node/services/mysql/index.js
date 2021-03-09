const express = require('express');
const config = require('../../config');
const router = require('./network');
const requestsLogger = require('../../lib/middlewares/requestsLogger');
const errors = require('../../network/errors')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestsLogger("MYSQL"));

app.use(router);
app.use(errors);

app.listen(config.services.mysql.PORT, () => {
    console.log(`> MYSQL service listen at ${config.services.mysql.BASE_URL}`);
});
