const express = require('express');
const secure = require('./secure');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

/**
 * GET /api/users
 * @summary Get all users
 * @tags Users - Application's users
 * @return {User[]} 200 - Success response - application/json
 * @example response - 200 - Success response example
 * [
 *   {
 *     "id": "3ac72e11-de02-47e6-a4ed-e90fde907887",
 *     "name": "Some user",
 *     "createdAt": "2020-12-19T01:30:24.994Z",
 *     "updatedAt": "2020-12-19T01:30:24.994Z"
 *   }
 * ]
 */
router.get('/', (req, res) => {
    Controller.list(req.query)
        .then((list) => response.success(req, res, list, 200))
        .catch((error) => {
            console.error('[GET ALL][users]', error);
            response.error(req, res);
        });
});

/**
 * POST /api/users
 * @summary Create a user
 * @param {CreateUserPayload} request.body.required - Users' info - application/json
 * @tags Users
 * @return {User} 201 - Success response - application/json
 */
router.post('/', (req, res) => {
    Controller.create(req.body)
        .then((user) => response.success(req, res, user, 201))
        .catch((error) => {
            console.error('[POST][users]', error);
            response.error(req, res);
        });
});

/**
 * PUT /api/users/{id}
 * @summary Create a user
 * @param {CreateUserPayload} request.body.required - Users' info - application/json
 * @tags Users
 * @return {User} 200 - Success response - application/json
 */
router.put('/:id', secure('update'), (req, res) => {
    Controller.update(req.body)
        .then((user) => response.success(req, res, user, 200))
        .catch((error) => {
            console.error('[PUT][users]', error);
            response.error(req, res);
        });
});

/**
 * GET /api/users/{id}
 * @summary Get a user
 * @param {string} id.path - User id
 * @tags Users
 * @return {User} 200 - Created user - application/json
 */
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

/**
 * PATCH /api/users/{id}
 * @summary Update a user
 * @param {string} id.path - User id
 * @param {CreateUserPayload} request.body.required - Users' info - application/json
 * @tags Users
 * @return {User} 200 - Updated user - application/json
 */
router.patch('/:id', (req, res) => {
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

/**
 * DELETE /api/users/{id}
 * @summary Delete a user
 * @param {string} id.path - User id
 * @tags Users
 * @return {?string} 204
 */
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
