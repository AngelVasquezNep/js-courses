const mongoose = require('mongoose');

const { Schema } = mongoose;

const messagesSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const Model = mongoose.model('messages', messagesSchema);

module.exports = Model;
