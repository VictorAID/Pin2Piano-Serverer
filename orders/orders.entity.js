const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true,
    },
    orderName: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    unitsPlaced: {
        type: Number,
        required: true,
        default: 0,
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

module.exports = mongoose.model('Orders', schema);
