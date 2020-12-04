const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    controller
        .getUsers(req.query)
        .then((user) => response.success(req, res, user))
        .catch(({ errorUser, error, status }) =>
            response.error(req, res, errorUser, { status, error })
        );
});

router.post('/', (req, res) => {
    const { body } = req;

    controller
        .addUser(body)
        .then((fullUser) =>
            response.success(req, res, fullUser, { status: 201 })
        )
        .catch(({ errorUser, error, status }) =>
            response.error(req, res, errorUser, { status, error })
        );
});

router.patch('/:id', (req, res) => {
    controller
        .updateUser(req.params.id, req.body)
        .then((updatedUser) => response.success(req, res, updatedUser))
        .catch(({ errorUser, error, status }) =>
            response.error(req, res, errorUser, { status, error })
        );
});

router.delete('/:id', (req, res) => {
    controller
        .deleteUser(req.params.id)
        .then(() =>
            response.success(req, res, null, {
                status: 204
            })
        )
        .catch(({ errorUser, error, status }) =>
            response.error(req, res, errorUser, { status, error })
        );
});

module.exports = router;
