const store = require('./store');
const Logger = require('../../utils/logger');

function addUser(user) {
    return new Promise((resolve, reject) => {
        if (!user || !user.name) {
            Logger.controller.error(
                'users-addUser',
                'Missing data'
            );

            return reject({
                errorUser: 'Missing data',
                error: 'Missing data',
                status: 400
            });
        }

        const fullUser = {
            ...user,
            date: new Date()
        };

        store
            .add(fullUser)
            .then((newUser) => resolve(newUser))
            .catch((error) =>
                reject({
                    error,
                    status: 500
                })
            );
    });
}

function getUsers(query) {
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

function updateUser(userId, newUser) {
    const { _id, date, ...restUser } = newUser;

    return new Promise((resolve, reject) => {
        if (!userId || !restUser.name) {
            Logger.controller.error('users-updateUser', 'Missing data');

            return reject({
                errorUser: 'Missing data',
                error: 'Missing data',
                status: 400
            });
        }

        store
            .update(userId, restUser)
            .then((updatedUser) => resolve(updatedUser))
            .catch((error) =>
                reject({
                    error,
                    status: 500
                })
            );
    });
}

function deleteUser(userId) {
    return new Promise((resolve, reject) => {
        if (!userId) {
            Logger.controller.error('users-deleteUser', 'Missing id');

            return reject({
                errorUser: 'Missing id',
                error: 'Missing id',
                status: 400
            });
        }

        store
            .delete(userId)
            .then(() => resolve())
            .catch((error) =>
                reject({
                    error,
                    status: 500
                })
            );
    });
}

module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
};
