const TABLE = 'users_follow';

function Controller(injectedStore) {
    const store = injectedStore || require('../../../store/db');

    async function create(user_from, user_to) {
        return store.create(TABLE, { user_from, user_to });
    }

    return {
        create,
    };
}

module.exports = Controller;
