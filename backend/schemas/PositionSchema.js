const { Schema , default: mongoose} = require("mongoose");

const PositionsSchema = new mongoose.Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});


module.exports = mongoose.model('position', PositionsSchema)
