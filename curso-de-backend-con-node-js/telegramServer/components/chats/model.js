const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
    users: {
        type: [
            {
                type: Schema.ObjectId,
                ref: 'Users',
                required: true,
            },
        ],
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },
});

const Model = mongoose.model('Chats', schema);

module.exports = Model;
