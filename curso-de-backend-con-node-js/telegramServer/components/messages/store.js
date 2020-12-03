const MongoLib = require('../../lib/mongo');

const mongoDb = new MongoLib();
const collection = 'messages';

function addMessage(message) {
    return mongoDb
        .create(collection, message)
        .then((insertedId) => ({ ...message, id: insertedId }));
}

function getMessages(query) {
    return mongoDb.getAll(collection, query);
}

module.exports = {
    add: addMessage,
    list: getMessages
    // get
    // update
    // delete
};
