
const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema(
    {
        orderDate: String,
        products: [{}],
        profileid:{type:Schema.ObjectId, ref:'Profile', default:null},
        price: Number,
        status: String,
    }
);

module.exports = mongoose.model('Order', orderSchema)