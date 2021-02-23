const express = require('express');
const secure = require('./secure');
const response = require('../../../network/response');
const Controller = require('./index');
const { catchControllerError } = require('../../../utils/errors');

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
        .catch(catchControllerError(req, res, '[GET ALL][users]'));
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
        .catch(catchControllerError(req, res, '[POST][users]'));
});

/**
 * PUT /api/users/{id}
 * @summary Create a user
 * @param {CreateUserPayload} request.body.required - Users' info - application/json
 * @tags Users
 * @return {User} 200 - Success response - application/json
 */
router.put('/:id', secure('update'), (req, res) => {
    Controller.update(req.params.id, req.body)
        .then((user) => response.success(req, res, user, 200))
        .catch(catchControllerError(req, res, '[PUT][users]'));
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
        .then((user) => response.success(req, res, user, 200))
        .catch(catchControllerError(req, res, `[GET ${id}][users]`));
});

/**
 * PATCH /api/users/{id}
 * @summary Update a user
 * @param {string} id.path - User id
 * @param {CreateUserPayload} request.body.required - Users' info - application/json
 * @tags Users
 * @return {User} 200 - Updated user - application/json
 */
router.patch('/:id', secure('update'), (req, res) => {
    const { id } = req.params;

    Controller.update(id, req.body)
        .then((user) => response.success(req, res, user, 200))
        .catch(catchControllerError(req, res, `[POST ${id}][users]`));
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
        .then(() => response.success(req, res, null, 204))
        .catch(catchControllerError(req, res, `[DELETED ${id}][users]`));
});

/**
 * FOLLOW
 */

/**
 * POST /api/users/follow/{target_id}
 * @summary Update a user
 * @param {string} target_id.path - User id
 * @tags Users
 * @return {User} 201 - Updated user - application/json
 */
router.post('/follow/:target_id', secure('follow'), (req, res) => {
    const { target_id } = req.params;

    Controller.follow(req.user.id, target_id)
        .then((data) => response.success(req, res, data, 201))
        .catch(catchControllerError(req, res, `[POST ${target_id}][users/follow]`));
});

/**
 * GET /api/users/{user_id}/following
 * @summary Update a user
 * @param {string} user_id.path - User id
 * @tags Users
 * @return {User} 201 - Updated user - application/json
 */
router.get('/:user_id/following', secure('follow'), (req, res) => {
    const { user_id } = req.params;

    Controller.following(user_id)
        .then((data) => response.success(req, res, data, 200))
        .catch(
            catchControllerError(req, res, `[POST ${user_id}][users/following]`),
        );
});

module.exports = router;
