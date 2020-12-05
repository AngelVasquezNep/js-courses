const mongoose = require('mongoose');

const { Schema } = mongoose;

const messagesSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'Users',
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

const Model = mongoose.model('Messages', messagesSchema);

module.exports = Model;
