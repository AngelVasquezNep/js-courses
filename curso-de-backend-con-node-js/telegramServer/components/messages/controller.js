const store = require('./store');
const Logger = require('../../utils/logger');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            Logger.controller.error(
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
            .then((newMessage) =>
                resolve({
                    ...fullMessage,
                    id: newMessage._id
                })
            )
            .catch((error) =>
                reject({
                    error,
                    status: 500
                })
            );
    });
}

function getMessages(query) {
    return new Promise((resolve, reject) => {
        store
            .list(query)
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
