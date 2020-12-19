const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

router.get('/', (req, res) => {
    Controller.list()
        .then((list) => response.success(req, res, list, 200))
        .catch((error) => {
            console.error('[GET ALL][users]', error);
            response.error(req, res);
        });
});

router.post('/', (req, res) => {
    Controller.create(req.body)
        .then((user) => response.success(req, res, user, 201))
        .catch((error) => {
            console.error('[POST][users]', error);
            response.error(req, res);
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Controller.get(id)
        .then((user) => {
            if (user) {
                response.success(req, res, user, 200);
            } else {
                response.error(req, res, 'Not found', 404);
            }
        })
        .catch((error) => {
            console.error(`[GET ${id}][users]`, error);
            response.error(req, res);
        });
});

router.post('/:id', (req, res) => {
    const { id } = req.params;

    Controller.update(id, req.body)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((error) => {
            console.error(`[POST ${id}][users]`, error);
            response.error(req, res);
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Controller.remove(id)
        .then(() => {
            response.success(req, res, null, 204);
        })
        .catch((error) => {
            console.error(`[DELETED ${id}][users]`, error);
            response.error(req, res);
        });
});

module.exports = router;
