function success(req, res, message = 'Success', status = 200) {
    res.status(status).send({
        status,
        error: false,
        body: message,
    });
}

function error(req, res, message = 'Internal Server Error', status = 500) {
    res.status(status).send({
        status,
        error: message,
        body: null,
    });
}

module.exports = {
    success,
    error,
};
