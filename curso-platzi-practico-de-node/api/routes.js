const express = require('express');

const users = require('./components/users/network');

function routes(server) {
    server.use('/users', users);
}

module.exports = routes;
