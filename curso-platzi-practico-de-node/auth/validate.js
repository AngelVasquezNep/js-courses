const jwt = require('jsonwebtoken');
const config = require('../config');

function getToken(auth) {
    if (!auth) {
        throw new Error('Without token');
    }


    if (auth.indexOf('Bearer ') === -1) {
        throw new Error('Invalid token format');
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
    return new Promise((resolve, reject) => {
        const decoded = decodeHeader(req);
        resolve(decoded);
    });
};

module.exports = {
    owner,
};
