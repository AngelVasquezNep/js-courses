exports.success = (req, res, body, config) => {
    const { status, error } = config || {};

    res.status(status || 200).json({
        error: '',
        body
    });
};

exports.error = (req, res, body, config) => {
    const { status, error } = config || {};

    res.status(status || 500).json({
        error: error || 'An error has occurred',
        body
    });
};
