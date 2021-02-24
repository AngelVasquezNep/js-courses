const express = require('express');

const response = require('../../network/response');
const Store = require('../../store/mysql');

const { catchControllerError } = require('../../utils/errors');

const router = express.Router();

router.get('/:table', (req, res) => {
    const { table } = req.params;

    Store.list(table, req.query)
        .then((data) => response.success(req, res, data, 200))
        .catch(catchControllerError(req, res, `[GET][MYSQL/${table}]`));
});

router.get('/:table/:id', (req, res) => {
    const { table, id } = req.params;

    Store.get(table, id)
        .then((data) => response.success(req, res, data, 200))
        .catch(catchControllerError(req, res, `[GET][MYSQL/${table}/${id}]`));
});

router.post('/:table', (req, res) => {
    const { table } = req.params;

    Store.create(table, req.body)
        .then((data) => response.success(req, res, data, 201))
        .catch(catchControllerError(req, res, `[POST][MYSQL/${table}]`));
});

router.put('/:table/:id', (req, res) => {
    const { table, id } = req.params;

    Store.update(table, id, req.body)
        .then((data) => response.success(req, res, data, 200))
        .catch(catchControllerError(req, res, `[PUT][MYSQL/${table}/${id}]`));
});

router.patch('/:table/:id', (req, res) => {
    const { table, id } = req.params;

    Store.update(table, id, req.body)
        .then((data) => response.success(req, res, data, 200))
        .catch(catchControllerError(req, res, `[PATCH][MYSQL/${table}/${id}]`));
});

router.delete('/:table/:id', (req, res) => {
    const { table, id } = req.params;

    Store.remove(table, id)
        .then(() => response.success(req, res, null, 204))
        .catch(catchControllerError(req, res, `[DELETE][MYSQL/${table}/${id}]`));
});

module.exports = router;
