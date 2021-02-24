const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');
const userSecure = require('../users/secure');
const { catchControllerError } = require('../../../utils/errors');

const router = express.Router();

/**
 * GET /api/posts
 * @summary Get all posts
 * @tags Posts
 * @return {Post[]} 200 - Success response - application/json
 * @example response - 200 - Success response example
 * [
 *  {
 *    "id": "1",
 *    "content": "Hi",
 *    "user": "123"
 *  }
 * ]
 */
router.get('/', (req, res) => {
    Controller.list(req.query)
        .then((list) => response.success(req, res, list, 200))
        .catch(catchControllerError(req, res, '[GET ALL][posts]'));
});

/**
 * POST /api/posts/
 * @summary Create a post
 * @tags Posts
 * @param {CreatePostPayload} request.body.required - Post' info - application/json
 * @return {Post} 201 - Success response - application/json
 * @example response - 201 - Success response example
 * {
 *   "id": "1",
 *   "content": "Hi",
 *   "user": "123"
 * }
 */
router.post('/', userSecure('logged'), (req, res) => {
    const user = req.user.id;

    Controller.create({ ...req.body, user })
        .then((data) => response.success(req, res, data, 201))
        .catch(catchControllerError(req, res, `[POST][posts]`));
});

/**
 * GET /api/posts/{id}
 * @summary Get a post
 * @tags Posts
 * @param {CreatePostPayload} request.body - Post' info - application/json
 * @return {Post} 200 - Success response - application/json
 * @example response - 200 - Success response example
 * {
 *   "id": "1",
 *   "content": "Hi",
 *   "user": "123"
 * }
 */
router.get('/:id', userSecure('logged'), (req, res) => {
    const { id } = req.params;

    Controller.get(id)
        .then((data) => response.success(req, res, data, 200))
        .catch(catchControllerError(req, res, `[GET][posts/${id}]`));
});

/**
 * PUT /api/posts/{id}
 * @summary Edit whole post
 * @tags Posts
 * @param {CreatePostPayload} request.body.required - Post' info - application/json
 * @return {Post} 200 - Success response - application/json
 * @example response - 200 - Success response example
 * {
 *   "id": "1",
 *   "content": "Hi",
 *   "user": "123"
 * }
 */
router.put('/:id', userSecure('logged'), (req, res) => {
    const { id } = req.params;

    Controller.update(id, req.body)
        .then((data) => response.success(req, res, data, 200))
        .catch(catchControllerError(req, res, `[PUT][posts/${id}]`));
});

/**
 * PATCH /api/posts/{id}
 * @summary Edit post
 * @tags Posts
 * @param {CreatePostPayload} request.body.required - Post' info - application/json
 * @return {Post} 200 - Success response - application/json
 * @example response - 200 - Success response example
 * {
 *   "id": "1",
 *   "content": "Hi",
 *   "user": "123"
 * }
 */
router.patch('/:id', userSecure('logged'), (req, res) => {
    const { id } = req.params;

    Controller.update(id, req.body)
        .then((data) => response.success(req, res, data, 200))
        .catch(catchControllerError(req, res, `[PATCH][posts/${id}]`));
});

/**
 * DELETE /api/posts/{id}
 * @summary Delete a Post
 * @param {string} id.path - Post id
 * @tags Posts
 * @return {?string} 204
 */
router.delete('/:id', userSecure('logged'), (req, res) => {
    const { id } = req.params;

    Controller.remove(id)
        .then(() => response.success(req, res, null, 204))
        .catch(catchControllerError(req, res, `[DELETED][posts/${id}]`));
});

module.exports = router;
