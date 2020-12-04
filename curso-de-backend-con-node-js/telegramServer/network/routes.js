const messages = require('../components/messages/network');
const users = require('../components/users/network')

function routes(server) {
    server.use('/messages', messages);
    server.use('/users', users);
}

module.exports = routes;
