const mongoose = require('mongoose');

const { Schema } = mongoose;

const messagesSchema = new Schema({
    user: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    }
});

const Model = mongoose.model('messages', messagesSchema);

module.exports = Model;
