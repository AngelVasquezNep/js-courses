const uuidv4 = require('../lib/uuidv4');

const db = {
    users: [{ id: '1', name: 'Angelito', createdAt: new Date(), updatedAt: new Date() }],
};

async function list(table, query) {
    return db[table];
}

async function get(table, id) {
    return list(table).then((list) => list.find((item) => item.id === id));
}

async function create(table, data) {
    const createdAt = new Date();

    const element = {
        ...data,
        createdAt,
        updatedAt: createdAt,
        id: uuidv4(),
    };

    db[table].push(element);

    return element;
}

async function update(table, id, data) {
    const elementIndex = db[table].findIndex((el) => el.id === id);

    if (elementIndex !== -1) {
        const element = db[table][elementIndex];

        const newElement = {
            ...element,
            ...data,
            id,
            createdAt: element.createdAt,
            updatedAt: new Date(),
        };

        db[table][elementIndex] = newElement;

        return newElement;
    }

    throw new Error(`Element ${id} at [${table}] was Not found`);
}

async function remove(table, id) {
    db[table] = db[table].filter((element) => element.id !== id);

    return true;
}

module.exports = {
    list,
    get,
    create,
    update,
    remove,
};
