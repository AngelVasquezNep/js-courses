const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || 'http://localhost';

const config = {
    api: {
        PORT,
        HOST,
        API_BASE_URL: process.env.API_BASE_URL || `${HOST}:${PORT}`
    }
};

module.exports = config;
