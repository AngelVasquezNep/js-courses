const auth = require('../auth');
const usersFollow = require('../users_follow')

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
        const { password, ...rest } = data;

        const authUpdateInfo = {}

        if (data.username) {
            authUpdateInfo.username = data.username
        }

        if (password) {
            authUpdateInfo.password = password
        }

        if (Object.keys(authUpdateInfo).length > 0) {
            await auth.update({ ...authUpdateInfo, userId: id });
        }

        return store.update(TABLE, id, rest);
    }

    function remove(id) {
        return store.remove(TABLE, id);
    }

    async function follow(id, target) {
        return usersFollow.create(id, target);
    }

    async function following(id) {
        return usersFollow.following(TABLE, id);
    }

    return {
        list,
        get,
        create,
        update,
        remove,
        follow,
        following,
    };
}

module.exports = Controller;
