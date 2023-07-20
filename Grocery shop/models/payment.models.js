const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    user_Id:{
        type:String,
        required:true
    },
    cart_Id:{
        type:String,
        required:true
    },
    payments:{
        type:Number,
        required:true
    },
    payment_Date:{
        type:Date,
        required:true
    }
})

module.exports = mongoose.model('Payment',paymentSchema)