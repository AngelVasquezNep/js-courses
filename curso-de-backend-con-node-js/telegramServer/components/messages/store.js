const Model = require('./model');

function addMessage(message) {
    const newMessage = new Model(message);

    return newMessage.save();
}

function getMessages(query) {
    return new Promise((resolve, reject) => {
        Model.find(query)
            .populate('user')
            .exec((error, populateData) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(populateData);
            })
    });
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
