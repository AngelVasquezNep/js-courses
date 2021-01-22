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

module.exports = {
    messageErrors,
    error,
};
