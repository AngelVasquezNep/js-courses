const utils = require('../utils');
const response = require('./response');

function logReqError(req, error) {
    const errorDate = utils.time.UTCFormatedDate();

    console.error(`[NETWORK ERROR][${errorDate}] ${req.originalUrl}`);
    console.error(error);
}

function errors(error, req, res, next) {
    logReqError(req, error  )

    let message = error.message || 'Internal Error';
    const status = error.statusCode || 500;

    response.error(req, res, message, status);
}

module.exports = errors;
