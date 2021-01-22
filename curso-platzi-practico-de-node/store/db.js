const utils = require('../utils');
const uuidv4 = require('../lib/uuidv4');

const db = {
    auth: [],
    users: [
        {
            id: '1',
            name: 'Angelito',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ],
};

async function list(table, query = {}) {
    const keys = Object.keys(query);
    const data = db[table];

    if (keys.length === 0) {
        return data;
    }

    const filteredData = data.filter((d) =>
        keys.every((key) => d[key] === query[key]),
    );

    return filteredData;
}

async function get(table, id) {
    return list(table).then((list) => list.find((item) => item.id === id));
}

async function create(table, data, { useCustomId = false } = {}) {
    const createdAt = new Date().getTime();

    const element = {
        ...data,
        createdAt,
        updatedAt: createdAt,
        id: useCustomId ? data.id : uuidv4(),
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
            updatedAt: new Date().getTime(),
        };

        db[table][elementIndex] = newElement;

        return newElement;
    }

    throw utils.errors.error(404, `Element ${id} was not found`);
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
