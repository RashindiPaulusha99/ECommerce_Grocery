const mongoose = require('mongoose')

const category = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    image:{
        type: Buffer, // Change this to Buffer type
        required: true,
    }
})

module.exports = mongoose.model('Category',category)