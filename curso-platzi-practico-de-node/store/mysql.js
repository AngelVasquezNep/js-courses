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

function list(table, query) {
    const dbQuery =
        query && Object.keys(query).length > 0
            ? [`SELECT * FROM ${table} WHERE ?`, query]
            : [`SELECT * FROM ${table}`];

    return new Promise((resolve, reject) =>
        connection.query(...dbQuery, (error, data) => {
            if (error) {
                return reject(error);
            }

            resolve(data);
        }),
    );
}

function get(table, id) {
    return new Promise((resolve, reject) =>
        connection.query(
            `SELECT * FROM ${table} WHERE id="${id}"`,
            (error, data) => {
                if (error) {
                    return reject(error);
                }
                const [element] = data;

                resolve(element || null);
            },
        ),
    );
}

function create(table, data) {
    return new Promise((resolve, reject) =>
        connection.query(`INSERT INTO ${table} SET ?`, data, (error) => {
            if (error) {
                return reject(error);
            }

            resolve(data);
        }),
    );
}

function update(table, id, data) {
    return new Promise((resolve, reject) =>
        connection.query(
            `UPDATE ${table} SET ? WHERE id="${id}"`,
            data,
            (error) => {
                if (error) {
                    return reject(error);
                }

                get(table, id).then(resolve).catch(reject);
            },
        ),
    );
}

function remove(table, id) {
    return new Promise((resolve, reject) =>
        connection.query(
            `DELETE FROM ${table} WHERE id="${id}"`,
            (error, results) => {
                if (error) {
                    return reject(error);
                }

                resolve(results);
            },
        ),
    );
}

module.exports = {
    list,
    get,
    create,
    update,
    remove,
};
