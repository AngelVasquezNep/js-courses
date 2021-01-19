const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');

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
        .then((auth) => {
            if (auth.token) {
                response.success(req, res, auth, 200)
                return;
            }

            response.error(req, res, auth.error, 400)
        })
        .catch((error) => {
            console.error('[POST][Login auth]', error);
            response.error(req, res);
        });
});

module.exports = router;
