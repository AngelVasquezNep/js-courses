const messages = require('../components/messages/network');
const users = require('../components/users/network')
const chats = require('../components/chats/network')

function routes(server) {
    server.use('/messages', messages);
    server.use('/users', users);
    server.use('/chats', chats)
}

module.exports = routes;
