// Add your new envs at README.md

const { env } = process;

const config = {
    dev: env.NODE_ENV !== 'production',
    PORT: env.PORT || 8000,
    cors: env.CORS || '*',

    apiBaseUrl: `${env.API_BASE_URL}:${env.PORT || 8000}`,
    publicFilesPath: env.PUBLIC_FILES_PATH || 'app',

    dbUser: env.DB_USER,
    dbPassword: env.DB_PASSWORD,
    dbHost: env.DB_HOST,
    dbName: env.DB_NAME,
};

module.exports = config;
