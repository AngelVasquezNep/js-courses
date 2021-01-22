const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');
const { catchControllerError } = require('../../../utils/errors');

const router = express.Router();

/**
 * POST /api/auth/login
 * @summary Login auth user
 * @tags Auth
 * @param {CreateUserAuthPayload} request.body.required - Users' info - application/json
 * @return {Auth} 200 - Success response - application/json
 * @example response - 200 - Success response example
 *  {
 *    "token": "A JWT token"
 *  }
 */
router.post('/login', (req, res) => {
    Controller.login(req.body)
        .then((auth) => response.success(req, res, auth, 200))
        .catch(catchControllerError(req, res, '[POST][Login auth]'));
});

module.exports = router;
