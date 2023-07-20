const express = require('express')
const app = express()
const router = express.Router()

const Payment = require('../models/payment.models')

app.use(express.json())

router.post('/save',async (req,res) => {
    const payment = new Payment({
        user_Id:req.body.user_Id,
        cart_Id:req.body.cart_Id,
        payments:req.body.payments,
        payment_Date:req.body.payment_Date
    })

    try {
        const save = await payment.save()
        res.json(save)
    }catch (error) {
        res.send('Error : '+error)
    }

})

router.get('/getAll',async (req, res) =>{
    try {
        const get = await Payment.find()
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/get/:id',async (req, res) =>{
    try {
        const get = await Payment.findById(req.params.id)
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

module.exports = router
