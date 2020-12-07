const mongoose = require('mongoose');

const { Schema } = mongoose;

const messagesSchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chats',
        required: true,
    },
    user: {
        type: Schema.ObjectId,
        ref: 'Users',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    fileUrl: {
        type: String,
    },
    date: {
        type: Date,
        required: true
    }
});

const Model = mongoose.model('Messages', messagesSchema);

module.exports = Model;
