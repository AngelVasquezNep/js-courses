const db = {
    users: [{ id: 1, name: 'Angelito' }],
};

async function list(table, query) {
    return db[table];
}

async function get(table, id) {
    return list(table).find((item) => item.id === id);
}

async function upsert(table, data) {
    db[table].push(data);
    return data;
}

async function remove(table, id) {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
};
