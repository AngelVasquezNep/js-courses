const utils = require("../../utils");

function requestsLogger(req, res, next) {
    const { method, originalUrl } = req;

    const date = utils.time.UTCFormatedDate();

    console.info(`[${method}][${date}] ${originalUrl}`);

    next();
}

module.exports = requestsLogger;
