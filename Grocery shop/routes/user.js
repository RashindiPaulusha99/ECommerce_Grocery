const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors'); // Import the cors middleware

const User = require('../models/user.models')

app.use(express.json())
app.use(cors());

router.post('/register',async (req,res) => {
    const user = new User({
        name:req.body.name,
        contact:req.body.contact,
        address:req.body.address,
        email:req.body.email,
        password:req.body.password,
        addedDate:req.body.addedDate,
    })

    try {
        const register = await user.save()
        res.json(register)
    }catch (error) {
        res.send('Error : '+error)
    }

})

router.get('/getAll',async (req, res) =>{
    try {
        const get = await User.find()
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/get/:id',async (req, res) =>{
    try {
        const get = await User.findById(req.params.id)
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/login/:email/:password',async (req, res) =>{
    try {
        const login = await User.findOne({ email: req.params.email, password: req.params.password })
        res.json(login)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.put('/update/:id',async (req,res) =>{
    try {
        const get = await User.findById(req.params.id)
        get.name = req.body.name
        get.contact = req.body.contact
        get.address = req.body.address
        get.email = req.body.email
        get.password = req.body.password
        get.addedDate = req.body.addedDate
        const response = await get.save()

        res.json(response)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.delete('/delete/:id',async (req,res) =>{
    try {
        const get = await User.findById(req.params.id)
        const response = await get.remove()
        res.json(response)
    }catch (error) {
        res.send('Error : '+error)
    }
})

module.exports = router

