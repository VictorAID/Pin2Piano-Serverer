const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true,
    },
    productName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    updatedBy: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    unitsAvailable: {
        type: Number,
        required: true,
        default: 0,
    },
    description: {
        type: String,
        required: true,
        default: '',
    },
    tags: {
        type: Array,
        required: true,
        default: [],
    },
    updatedOn: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = mongoose.model('Products', schema);
