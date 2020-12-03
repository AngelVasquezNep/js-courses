// Add your new envs at README.md

const config = {
    dev: process.env.NODE_ENV !== 'production',
    PORT: process.env.PORT || 8000,
    cors: process.env.CORS || '*',

    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME
};

module.exports = config;
