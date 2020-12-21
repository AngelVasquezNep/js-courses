const Auth = require('../../../auth');
const TABLE = 'auth';

function Controller(injectedStore) {
    const store = injectedStore || require('../../../store/db');

    function create(data) {
        const { userId, username, passwrod } = data;

        return store.create(TABLE, { userId, username, passwrod });
    }

    function update(data) {
        const { userId, username, passwrod } = data;

        return store.update(TABLE, userId, { username, passwrod });
    }

    async function login(data) {
        const { username, passwrod } = data;

        const [user] = await store.list(TABLE, { username });

        if (user && user.passwrod === passwrod) {
            return {
                token: Auth.sign(user),
            };
        }

        return {
            error: 'Invalid data',
        };
    }

    return {
        create,
        update,
        login,
    };
}

module.exports = Controller;
