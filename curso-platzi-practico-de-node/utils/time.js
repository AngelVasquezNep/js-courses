function UTCFormatedDate(date, options) {
    return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'UTC',
        ...options,
    }).format(date || new Date());
}

module.exports = {
    UTCFormatedDate,
};
