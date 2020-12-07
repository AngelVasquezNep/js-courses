const store = require('./store');
const Logger = require('../../utils/logger');
const { SAVED_FILES_URL } = require('./config');

function addMessage({ chat, user, message, file }) {
    return new Promise((resolve, reject) => {
        if (!user || !message || !chat) {
            Logger.controller.error(
                'messages-addMessage',
                'Without user or message',
            );

            return reject({
                errorMessage: 'Missing data',
                error: 'Without user or message',
                status: 400,
            });
        }

        const fullMessage = {
            chat,
            user,
            message,
            fileUrl: (file && `${SAVED_FILES_URL}/${file.filename}`) || null,
            date: new Date(),
        };

        store
            .add(fullMessage)
            .then((newMessage) => resolve(newMessage))
            .catch((error) =>
                reject({
                    error,
                    status: 500,
                }),
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
                    status: 500,
                }),
            );
    });
}

function updateMessage(messageId, newMessage) {
    const { _id, date, ...restMessage } = newMessage;

    return new Promise((resolve, reject) => {
        if (!messageId || !restMessage.message) {
            Logger.controller.error('messages-updateMessage', 'Missing data');

            return reject({
                errorMessage: 'Missing data',
                error: 'Missing data',
                status: 400,
            });
        }

        store
            .update(messageId, restMessage)
            .then((updatedMessage) => resolve(updatedMessage))
            .catch((error) =>
                reject({
                    error,
                    status: 500,
                }),
            );
    });
}

function deleteMessage(messageId) {
    return new Promise((resolve, reject) => {
        if (!messageId) {
            Logger.controller.error('messages-deleteMessage', 'Missing id');

            return reject({
                errorMessage: 'Missing id',
                error: 'Missing id',
                status: 400,
            });
        }

        store
            .delete(messageId)
            .then(() => resolve())
            .catch((error) =>
                reject({
                    error,
                    status: 500,
                }),
            );
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
};
