const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    accountbalance: {
        type: Number,
        required: true
    }
})

const Customers = mongoose.model('Customers', userSchema);

module.exports = Customers;