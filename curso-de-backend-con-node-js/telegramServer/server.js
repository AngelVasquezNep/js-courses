const express = require('express');
const bodyParser = require('body-parser');

const router = require('./network/routes');

const app = express();

const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(router); // router ALWAYS goes to the end of "use" handles

router(app)

app.use('/app', express.static('public'));

app.listen(PORT, () =>
    console.log(`> App is ready at http://localhost:${PORT}`)
);
