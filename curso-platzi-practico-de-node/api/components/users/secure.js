const response = require('../../../network/response');
const Auth = require('../../../auth');

/**
 * Check if some user can make an accion based on its token
 */

function checkAuth(action) {
    async function middleware(req, res, next) {
        switch (action) {
            case 'update':
                const owner = req.params.id;

                await Auth.validate
                    .owner(req, owner)
                    .then((decoded) => {
                        next()
                    })
                    .catch((error) => {
                        console.error('[middalware][user secure update]', error);
                        response.error(req, res);
                    });
                break;

            default:
                next();
        }
    }

    return middleware;
}

module.exports = checkAuth;
