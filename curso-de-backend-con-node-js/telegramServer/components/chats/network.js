const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/:userId', (req, res) => {
    controller
        .getChats(req.query, req.params)
        .then((chats) => response.success(req, res, chats))
        .catch(({ errorChat, error, status }) =>
            response.error(req, res, errorChat, { status, error }),
        );
});

router.get('/', (req, res) => {
    controller
        .getChats(req.query, req.params)
        .then((chats) => response.success(req, res, chats))
        .catch(({ errorChat, error, status }) =>
            response.error(req, res, errorChat, { status, error }),
        );
});

router.post('/', (req, res) => {
    const { body } = req;

    controller
        .addChat(body.chat)
        .then((fullChat) =>
            response.success(req, res, fullChat, { status: 201 }),
        )
        .catch(({ errorChat, error, status }) =>
            response.error(req, res, errorChat, { status, error }),
        );
});

router.patch('/:id', (req, res) => {
    controller
        .updateChat(req.params.id, req.body)
        .then((updatedChat) => response.success(req, res, updatedChat))
        .catch(({ errorChat, error, status }) =>
            response.error(req, res, errorChat, { status, error }),
        );
});

router.delete('/:id', (req, res) => {
    controller
        .deleteChat(req.params.id)
        .then(() =>
            response.success(req, res, null, {
                status: 204,
            }),
        )
        .catch(({ errorChat, error, status }) =>
            response.error(req, res, errorChat, { status, error }),
        );
});

module.exports = router;
