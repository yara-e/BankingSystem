const express = require('express')
const Transaction = require('../models/Transaction');
const Customers = require("../models/Users");
require("../db/conn");
const router = express.Router()

router.get('/transactions', async (req, res) => {
    const transactions = await Transaction.find({}).sort({ date: -1 })
    res.send(transactions)
})



module.exports = router