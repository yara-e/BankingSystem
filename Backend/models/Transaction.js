const mongoose = require('mongoose')

const TransactionSchema = mongoose.Schema({
    from: {
        type: Object,
        required: true,
    },
    to: {
        type: Object,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
})

module.exports = mongoose.model('Transactions', TransactionSchema)


/*    try {
            return await findOne(this.name, { _id: ObjectId(id) })
        } catch (e) {
            return null
        }
    }
    Model.find({ id: mongoose.ObjectId(userID) })
    */ 