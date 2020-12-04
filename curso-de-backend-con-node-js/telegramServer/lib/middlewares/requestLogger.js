const { Logger } = require('../../utils/logger');

const logger = new Logger('REQUEST');

function requestsLogger(req, res, next) {
    const { method, originalUrl } = req;

    logger.info('', `[${method}] ${originalUrl}`);

    next();
}

module.exports = requestsLogger;
