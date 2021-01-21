const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config');

const validate = require('./validate') 

function sign(user) {
    return jwt.sign(user, config.auth.SECRET_KEY);
}

function hashPassword(password, salt = 5) {
    return bcrypt.hash(password, salt);
}

function comparePassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword)
}

module.exports = {
    sign,
    hashPassword,
    comparePassword,
    validate,
};
