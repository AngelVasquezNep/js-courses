const express = require('express');

const auth = require('./components/auth/network');
const users = require('./components/users/network');
const posts = require('./components/posts/network');

function routes(server) {
    const router = express.Router();

    router.use('/auth', auth);
    router.use('/users', users);
    router.use('/posts', posts);

    server.use('/api', router);
}

module.exports = routes;
