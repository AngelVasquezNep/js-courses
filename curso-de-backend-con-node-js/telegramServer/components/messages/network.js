const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    controller
        .getMessages(req.query)
        .then((messages) => response.success(req, res, messages))
        .catch(({ errorMessage, error, status }) =>
            response.error(req, res, errorMessage, { status, error })
        );
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

router.patch('/:id', (req, res) => {
    controller
        .updateMessage(req.params.id, req.body)
        .then((updatedMessage) => response.success(req, res, updatedMessage))
        .catch(({ errorMessage, error, status }) =>
            response.error(req, res, errorMessage, { status, error })
        );
});

router.delete('/:id', (req, res) => {
    controller
        .deleteMessage(req.params.id)
        .then(() =>
            response.success(req, res, null, {
                status: 204
            })
        )
        .catch(({ errorMessage, error, status }) =>
            response.error(req, res, errorMessage, { status, error })
        );
});

module.exports = router;
