const Model = require('./model');

function addMessage(message) {
    const newMessage = new Model(message);

    return newMessage.save();
}

function getMessages(query) {
    return Model.find(query)
}

module.exports = {
    add: addMessage,
    list: getMessages
    // get
    // update
    // delete
};
