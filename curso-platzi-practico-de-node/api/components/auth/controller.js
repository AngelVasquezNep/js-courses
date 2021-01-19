const Auth = require('../../../auth');
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
