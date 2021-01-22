const Auth = require('../../../auth');
const utils = require('../../../utils');

const TABLE = 'auth';

function Controller(injectedStore) {
    const store = injectedStore || require('../../../store/db');

    async function create(data) {
        const { userId, username, password } = data;

        const hashedPassword = await Auth.hashPassword(password);

        return store.create(
            TABLE,
            {
                username,
                id: userId,
                password: hashedPassword,
            },
            { useCustomId: true },
        );
    }

    async function update(data) {
        const { userId, username, password } = data;

        const hashedPassword = await Auth.hashPassword(password);

        return store.update(TABLE, userId, {
            username,
            password: hashedPassword,
        });
    }

    async function login(data) {
        const { username, password } = data;

        const [user] = await store.list(TABLE, { username });

        if (user) {
            const passwordIsRight = await Auth.comparePassword(
                password,
                user.password,
            );

            if (passwordIsRight) {
                const { password, ...restUser } = user;

                return {
                    token: Auth.sign(restUser),
                };
            }

            throw utils.errors.error(400, 'Wrong username or password');
        }

        throw utils.errors.error(404, `User ${username} was not found`);
    }

    return {
        create,
        update,
        login,
    };
}

module.exports = Controller;
