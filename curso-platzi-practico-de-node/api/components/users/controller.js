const auth = require('../auth');

const TABLE = 'users';

function Controller(injectedStore) {
    const store = injectedStore || require('../../../store/db');

    function list(query) {
        return store.list(TABLE, query);
    }

    function get(id) {
        return store.get(TABLE, id);
    }

    async function create(data) {
        const { username, password, ...rest } = data;

        const user = await store.create(TABLE, { username, ...rest });

        await auth.create({ userId: user.id, username, password });

        return user;
    }

    async function update(id, data) {
        const { username, password, ...rest } = data;
        if (password || username) {
            await auth.update({ userId: id, username, password });
        }

        return store.update(TABLE, id, { username, ...rest });
    }

    function remove(id) {
        return store.remove(TABLE, id);
    }

    return {
        list,
        get,
        create,
        update,
        remove,
    };
}

module.exports = Controller;
