const utils = require('../../utils');

function requestsLogger(loggerType) {
    return function (req, res, next) {
        const { method, originalUrl } = req;

        const date = utils.time.UTCFormatedDate();

        console.info(`[${loggerType}][${method}][${date}] ${originalUrl}`);

        next();
    };
}

module.exports = requestsLogger;
