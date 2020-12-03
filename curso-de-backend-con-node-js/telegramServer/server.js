const express = require('express');
const bodyParser = require('body-parser');
const config = require('./utils/config')

const router = require('./network/routes');

const app = express();

const PORT = config.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app)

app.use('/app', express.static('public'));

app.listen(PORT, () =>
    console.log(`> App is ready at http://localhost:${PORT}`)
);
