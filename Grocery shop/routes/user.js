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

/*router.put('/:id',async (req,res) =>{
    try {
        const register = await User.findById(req.params.id)
        register.firstName = req.body.firstName
        register.surname = req.body.surname
        register.gender = req.body.gender
        register.dateOfBirth = req.body.dateOfBirth
        register.password = req.body.password
        register.phoneNumber = req.body.phoneNumber
        register.email = req.body.email
        const response = await register.save()

        res.json(response)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.delete('/:id',async (req,res) =>{
    try {
        const register = await User.findById(req.params.id)
        const response = await register.remove()
        res.json(response)
    }catch (error) {
        res.send('Error : '+error)
    }
})*/

module.exports = router

