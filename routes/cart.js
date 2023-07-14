const express = require('express')
const app = express()
const router = express.Router()

const Cart = require('../models/cart.models')

app.use(express.json())

router.post('/save',async (req,res) => {
    const cart = new Cart({
        items:req.body.items,
        total_Price:req.body.total_Price,
        order_Date:req.body.order_Date
    })

    try {
        const save = await cart.save()
        res.json(save)
    }catch (error) {
        res.send('Error : '+error)
    }

})

router.get('/getAll',async (req, res) =>{
    try {
        const get = await Cart.find()
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/get/:id',async (req, res) =>{
    try {
        const get = await Cart.findById(req.params.id)
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

module.exports = router
