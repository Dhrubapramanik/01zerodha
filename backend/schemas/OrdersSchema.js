const { Schema, default: mongoose } = require("mongoose")

const OrderSchema = new Schema(
    {
        name: String,
        qty: Number,
        price: String,
        mode: String,
    }
)

module.exports = mongoose.model('order', OrderSchema)