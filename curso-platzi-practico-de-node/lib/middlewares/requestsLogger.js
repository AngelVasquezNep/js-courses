function requestsLogger(req, res, next) {
    const { method, originalUrl } = req;

    const date = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'UTC'
    }).format(new Date());

    console.info(`[${method}][${date}] ${originalUrl}`);

    next();
}

module.exports = requestsLogger;
