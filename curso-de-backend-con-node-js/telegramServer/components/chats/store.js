const Model = require('./model');

function addChat(chat) {
    const newChat = new Model(chat);

    return newChat.save();
}

function getChats(query) {
    return new Promise((resolve, reject) => {
        Model.find(query)
            .populate('users') // Model field
            .exec((error, populateData) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(populateData);
            })
    });
}

function updateChat(chatId, newChat) {
    return Model.findOneAndUpdate({ _id: chatId }, newChat, {
        new: true
    });
}

function deleteChat(chatId) {
    return Model.deleteOne({
        _id: chatId
    });
}

module.exports = {
    add: addChat,
    list: getChats,
    // get
    update: updateChat,
    delete: deleteChat
};
