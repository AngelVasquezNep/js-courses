const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || 'http://localhost';
const API_BASE_URL = process.env.API_BASE_URL || `${HOST}:${PORT}`;
const swaggerUIPath = process.env.swaggerUIPath || '/api-docs';
const apiDocsPath = process.env.apiDocsPath || '/api-docs-json';

const config = {
    isDev: process.env.NODE_ENV !== 'production',
    api: {
        PORT,
        HOST,
        API_BASE_URL,
    },
    auth: {
        SECRET_KEY: process.env.AUTH_SECRET_KEY || 'YOUR_SCRET_KEY',
    },
    swagger: {
        swaggerUIPath,
        apiDocsPath,
        documentationApi: {
            ui: `${API_BASE_URL}${swaggerUIPath}`,
            json: `${API_BASE_URL}${apiDocsPath}`,
        },
    },
    db: {
        mysql: {
            host: process.env.MYSQL_HOST || '',
            user: process.env.MYSQL_USER || '',
            password: process.env.MYSQL_PASSWORD || '',
            database: process.env.MYSQL_DATABASE || '',
        },
    },
    services: {
        mysql: {
            PORT: process.env.SERVICE_MYSQL_PORT || 3001,
            BASE_URL:
                process.env.SERVICE_MYSQL_BASE_URL ||
                `${HOST}:${process.env.SERVICE_MYSQL_PORT || 3001}`,
        },
    },
};

module.exports = config;
