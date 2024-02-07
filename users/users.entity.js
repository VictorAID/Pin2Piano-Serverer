const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    ordersPlaced: {
        type: Number,
        required: true,
        default: 0,
    },
    tags: {
        type: Array,
        required: true,
        default: [],
    },
    description: {
        type: String,
        required: true,
        default: '',
    },
    updatedOn: {
        type: Date,
        required: true,
        default: Date.now,
    },
    updatedBy: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Users', schema);
