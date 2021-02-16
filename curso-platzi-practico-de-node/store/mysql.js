const mysql = require('mysql');
const config = require('../config');

let connection;

function handleConnection() {
    connection = mysql.createConnection({
        host: config.db.mysql.host,
        user: config.db.mysql.user,
        password: config.db.mysql.password,
        database: config.db.mysql.database,
    });

    connection.connect((error) => {
        if (error) {
            console.error('[DB ERROR]', error);
            setTimeout(handleConnection, 2000);
        } else {
            console.log('[DB CONNECTED]');
        }
    });

    connection.on('error', (error) => {
        console.error('[DB ERROR]', error);

        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            handleConnection();
        } else {
            throw error;
        }
    });
}

handleConnection();

function list(table) {
    return new Promise((resolve, reject) =>
        connection.query(`SELECT * FROM ${table}`, (error, data) => {
            if (error) {
                return reject(error);
            }

            resolve(data);
        }),
    );
}

module.exports = {
    list,
};
