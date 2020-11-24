const express = require('express');

const message = require('../components/messages/network');

function routes(server) {
    server.use('/message', message);
}

module.exports = routes;
