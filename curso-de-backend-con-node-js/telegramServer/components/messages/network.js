const express = require('express');

const response = require('../../network/response')

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.headers);

    res.header({
        'my-custom-header': 'My custom header'
    });

    response.success(req, res, 'Hola');
});

router.post('/', (req, res) => {
    // response.success(req, res, 'Todo se creó ok', { status: 201 });
    response.error(req, res, '', {
        error: 'Error en la configuración'
    });
});

module.exports = router;
