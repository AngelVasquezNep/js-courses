const Model = require('./model');

function add(user) {
    const newUser = new Model(user);

    return newUser.save();
}

function get(query) {
    return Model.find(query);
}

function update(userId, newUser) {
    return Model.findOneAndUpdate({ _id: userId }, newUser, {
        new: true
    });
}

function deleteOne(userId) {
    return Model.deleteOne({
        _id: userId
    });
}

module.exports = {
    add,
    get,
    update,
    list: get,
    delete: deleteOne
};
