const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const Model = mongoose.model('Users', schema);

module.exports = Model;
