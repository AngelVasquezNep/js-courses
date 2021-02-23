const mysql = require('./mysql');

const utils = require('../utils');
const uuidv4 = require('../lib/uuidv4');

async function list(table, query, join) {
    return mysql.list(table, query, join);
}

async function get(table, id) {
    return mysql.get(table, id).then((element) => {
        if (!element) {
            throw utils.errors.error(404, `Element ${id} was not found`);
        }

        return element;
    });
}

async function create(table, data, { useCustomId = false } = {}) {
    return mysql.create(table, {
        ...data,
        id: useCustomId ? data.id : uuidv4(),
    });
}

async function update(table, id, data) {
    return mysql.update(table, id, data).then((element) => {
        if (!element) {
            throw utils.errors.error(404, `Element ${id} was not found`);
        }

        return element;
    });
}

async function remove(table, id) {
    return mysql.remove(table, id).then((result) => {
        if (result.affectedRows === 0) {
            throw utils.errors.error(404, `Element ${id} was not found`);
        }

        return true;
    });
}

module.exports = {
    list,
    get,
    create,
    update,
    remove,
};
