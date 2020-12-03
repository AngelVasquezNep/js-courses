const store = require('./store');
const Logs = require('../../utils/logs');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            Logs.controller.error(
                'messages-addMessage',
                'Without user or message'
            );

            return reject({
                errorMessage: 'Missing data',
                error: 'Without user or message',
                status: 400
            });
        }

        const fullMessage = {
            user,
            message,
            date: new Date()
        };

        store
            .add(fullMessage)
            .then((newMessage) => resolve(newMessage))
            .catch((error) =>
                reject({
                    error,
                    status: 500
                })
            );
    });
}

function getMessages() {
    return new Promise((resolve, reject) => {
        store
            .list()
            .then((list) => resolve(list))
            .catch((error) =>
                reject({
                    error,
                    status: 500
                })
            );
    });
}

module.exports = {
    addMessage,
    getMessages
};
