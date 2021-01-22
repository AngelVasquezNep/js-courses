const response = require('../network/response');

const messageErrors = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal server error',
};

function error(code, message) {
    const errorMessage = message || messageErrors[code] || messageErrors['500'];

    const error = new Error(errorMessage);

    error.statusCode = code || 500;

    return error;
}

function catchControllerError(req, res, label = '[METHOD][entity]') {
    return function (error) {
        console.error(label, error);

        if (error.statusCode) {
            response.error(req, res, error.message, error.statusCode);
            return;
        }

        response.error(req, res);
    };
}

module.exports = {
    messageErrors,
    error,
    catchControllerError,
};
