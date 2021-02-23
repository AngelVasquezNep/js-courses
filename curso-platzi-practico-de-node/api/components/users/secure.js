const Auth = require('../../../auth');

/**
 * Check if some user can make an accion based on its token
 */

function checkAuth(action) {
    function middleware(req, res, next) {
        switch (action) {
            case 'update':
                const owner = req.params.id;
                const decodedOwner = Auth.validate.owner(req, owner);

                next();
                break;

            case 'follow':
                Auth.validate.logged(req);

                next();
                break;

            default:
                next();
        }
    }

    return middleware;
}

module.exports = checkAuth;
