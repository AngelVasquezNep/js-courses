const { Logger } = require('../../utils/logger');

const logger = new Logger('request');

function requestsLogger(req, res, next) {
    const { method, originalUrl } = req;

    logger.info(method, `[originalUrl] ${originalUrl}`);

    next();
}

module.exports = requestsLogger;
