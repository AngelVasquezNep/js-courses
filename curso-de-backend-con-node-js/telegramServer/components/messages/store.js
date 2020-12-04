const Model = require('./model');

function addMessage(message) {
    const newMessage = new Model(message);

    return newMessage.save();
}

function getMessages(query) {
    return Model.find(query);
}

function updateMessage(messageId, newMessage) {
    return Model.findOneAndUpdate({ _id: messageId }, newMessage, {
        new: true
    });
}

function deleteMessage(messageId) {
    return Model.deleteOne({
        _id: messageId
    });
}

module.exports = {
    add: addMessage,
    list: getMessages,
    // get
    update: updateMessage,
    delete: deleteMessage
};
