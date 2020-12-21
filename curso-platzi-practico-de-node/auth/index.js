const jwt = require('jsonwebtoken');
const config = require('../config')

function sign(user) {
    return jwt.sign(user, config.auth.SECRET_KEY);
}

module.exports = {
    sign,
};
