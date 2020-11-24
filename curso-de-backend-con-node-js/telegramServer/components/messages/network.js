const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.headers);

    res.header({
        'my-custom-header': 'My custom header'
    });

    response.success(req, res, 'Hola');
});

router.post('/', (req, res) => {
    const { body } = req;

    controller
        .addMessage(body.user, body.message)
        .then((fullMessage) =>
            response.success(req, res, fullMessage, { status: 201 })
        )
        .catch(({ errorMessage, error, status }) =>
            response.error(req, res, errorMessage, { status, error })
        );
});

module.exports = router;
