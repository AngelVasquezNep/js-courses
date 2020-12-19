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
    swagger: {
        swaggerUIPath,
        apiDocsPath,
        documentationApi: {
            ui: `${API_BASE_URL}${swaggerUIPath}`,
            json: `${API_BASE_URL}${apiDocsPath}`,
        },
    },
};

module.exports = config;
