const express = require("express");
const router = express.Router();
require("../db/conn");
const Transaction = require('../models/Transaction');
const Customers = require("../models/Users");
router.get('/customers', async (req, res) => {
    try {
        const customers = await Customers.find({})
        res.send(customers)
    }
    catch {
        console.log(error)
        res.status(500).send('Server Error')
    }
})
router.post('/transfers', async (req, res) => {
    const { from, to, amount } = req.body;

    const fromCustomer = await Customers.findOne({ 'name': `${from}` })
    const newFromBalance = Number(fromCustomer.accountbalance) - Number(amount)

    Customers.findOneAndUpdate({ name: from }, { $set: { accountbalance: newFromBalance } }, { new: true },).then(result => {
        res.json(result);
    })
    const toCustomer = await Customers.findOne({ 'name': `${to}` })
    const newToBalance = Number(toCustomer.accountbalance) + Number(amount)

    Customers.findOneAndUpdate({ name: to }, { $set: { accountbalance: newToBalance } }, { new: true },).then(result => {
        console.log(result);
    })
    const transaction = new Transaction({
        from: fromCustomer,
        to: toCustomer,
        amount,
    })
    transaction.save()
    // res.json(transaction)
}
)
module.exports = router;