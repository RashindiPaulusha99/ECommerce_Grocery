const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    items: [
        {
            item_Id: {
                type: String,
                required: true
            },
            qty: {
                type: Number,
                required: true
            },
            unit_price: {
                type: Number,
                required: true
            }
        }
    ],
    total_Price:{
        type:Number,
        required:true
    },
    order_Date:{
        type:Date,
        required:true
    }
})

module.exports = mongoose.model('Cart',cartSchema)