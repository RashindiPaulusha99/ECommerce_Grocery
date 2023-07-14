const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    qty_on_hand:{
        type:int,
        required:true
    },
    discount:{
        type:Double,
        required:true
    },
    unit_price:{
        type:Double,
        required:true
    },
})

module.exports = mongoose.model('Item',itemSchema)