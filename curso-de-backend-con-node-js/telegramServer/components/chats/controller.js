const store = require('./store');
const Logger = require('../../utils/logger');
const { removeAllEmptyKeys } = require('../../utils')

function addChat(chat) {
    return new Promise((resolve, reject) => {
        if (!chat || !Array.isArray(chat.users) || chat.users.length === 0) {
            Logger.controller.error('chats-addChat', 'Missing data');

            return reject({
                errorChat: 'Missing data',
                error: 'Missing data',
                status: 400,
            });
        }

        const fullChat = {
            ...chat,
            date: new Date(),
        };

        store
            .add(fullChat)
            .then((newChat) => resolve(newChat))
            .catch((error) =>
                reject({
                    error,
                    status: 500,
                }),
            );
    });
}

function getChats(query, params) {
    const finalQuery = removeAllEmptyKeys({
        ...query,
        users: params.userId || query.users,
    });

    return new Promise((resolve, reject) => {
        store
            .list(finalQuery)
            .then((list) => resolve(list))
            .catch((error) =>
                reject({
                    error,
                    status: 500,
                }),
            );
    });
}

function updateChat(chatId, newChat) {
    const { _id, date, ...restChat } = newChat;

    return new Promise((resolve, reject) => {
        if (!chatId || !restChat.name) {
            Logger.controller.error('chats-updateChat', 'Missing data');

            return reject({
                errorChat: 'Missing data',
                error: 'Missing data',
                status: 400,
            });
        }

        store
            .update(chatId, restChat)
            .then((updatedChat) => resolve(updatedChat))
            .catch((error) =>
                reject({
                    error,
                    status: 500,
                }),
            );
    });
}

function deleteChat(chatId) {
    return new Promise((resolve, reject) => {
        if (!chatId) {
            Logger.controller.error('chats-deleteChat', 'Missing id');

            return reject({
                errorChat: 'Missing id',
                error: 'Missing id',
                status: 400,
            });
        }

        store
            .delete(chatId)
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
    addChat,
    getChats,
    updateChat,
    deleteChat,
};
