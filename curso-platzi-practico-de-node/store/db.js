const db = {
    users: [{ id: 1, name: 'Angelito' }],
};

function list(table, query) {
    return db[table];
}

function get(table, id) {
    return list(table).find((item) => item.id === id);
}

function upsert(table, data) {
    db[table].push(data);
    return data;
}

function remove(table, id) {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
};
