const jwt = require('jsonwebtoken');
const config = require('../config');

const utils = require('../utils');

function getToken(auth) {
    if (!auth) {
        throw utils.errors.error(400, 'Without token');
    }

    if (auth.indexOf('Bearer ') === -1) {
        throw utils.errors.error(400, 'Invalid token format');
    }

    const token = auth.replace('Bearer ', '');

    return token;
}

function verifyToken(token) {
    return jwt.verify(token, config.auth.SECRET_KEY);
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || '';

    const token = getToken(authorization);
    const decoded = verifyToken(token);

    req.user = decoded;

    return decoded;
}

const owner = (req, owner) => {
    const decoded = decodeHeader(req);

    if (decoded.id === owner) {
        return decoded;
    }

    throw utils.errors.error(403);
};

module.exports = {
    owner,
};
