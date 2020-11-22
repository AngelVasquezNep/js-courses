const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');

const router = express.Router();
const app = express();

const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router); // router ALWAYS goes to the end of "use" handles

router.get('/', (req, res) => {
    console.log(req.headers);

    res.header({
        'my-custom-header': 'My custom header'
    });

    response.success(req, res, 'Hola');
});

router.post('/', (req, res) => {
    response.success(req, res, 'Todo se creó ok', { status: 201 });
});

app.listen(PORT, () =>
    console.log(`> App is ready at http://localhost:${PORT}`)
);
