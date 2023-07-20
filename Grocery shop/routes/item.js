const express = require('express')
const app = express()
const router = express.Router()

const Item = require('../models/item.models')

app.use(express.json())

router.post('/save',async (req,res) => {
    const item = new Item({
        name:req.body.name,
        description:req.body.description,
        category:req.body.category,
        brand:req.body.brand,
        qty_on_hand:req.body.qty_on_hand,
        discount:req.body.discount,
        unit_price:req.body.unit_price
    })

    try {
        const save = await item.save()
        res.json(save)
    }catch (error) {
        res.send('Error : '+error)
    }

})

router.get('/getAll',async (req, res) =>{
    try {
        const get = await Item.find()
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/get/:id',async (req, res) =>{
    try {
        const get = await Item.findById(req.params.id)
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

module.exports = router
