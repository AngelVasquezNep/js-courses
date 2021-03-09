module.exports = {
    apps: [
        {
            name: 'api',
            script: './api.js',
            env: {
                ...process.env,
            },
        },
        {
            name: 'mysql',
            script: './services/mysql.js',
            env: {
                ...process.env,
            },
        },
    ],
};
