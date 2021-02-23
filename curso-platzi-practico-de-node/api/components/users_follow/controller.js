const TABLE = 'users_follow';

function Controller(injectedStore) {
    const store = injectedStore || require('../../../store/db');

    async function create(user_from, user_to) {
        return store.create(TABLE, { user_from, user_to });
    }

    async function following(user_table, user_from) {
        const join = {
            [user_table]: 'user_to', // { users: 'user_to' }
        };

        return store.list(TABLE, { user_from }, join);
    }

    return {
        create,
        following,
    };
}

module.exports = Controller;
