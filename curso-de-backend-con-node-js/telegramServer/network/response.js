exports.success = (req, res, body, config) => {
    const { status, error } = config || {};

    res.status(status || 200).json({
        error: '',
        body
    });
};

exports.error = (req, res, errorMessage, config) => {
    const { status, error } = config || {};

    console.error(`[response error][${new Date()}]`);
    console.error(error);

    res.status(status || 500).json({
        error: errorMessage || 'An error has occurred',
        body: ''
    });
};
