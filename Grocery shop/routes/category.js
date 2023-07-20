const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require("body-parser");
const path = require('path');
const fs = require("fs");
const multer = require("multer");
const Category = require('../models/category.models')
const { GridFsStorage } = require("multer-gridfs-storage")

require("dotenv").config()

app.use(express.json())

app.use(bodyParser.urlencoded(
    { extended:true }
))

app.set("view engine","ejs");

const url = 'mongodb://127.0.0.1/grocery'

const storage = new GridFsStorage({
    url,
    file: (req, file) => {
        //If it is an image, save to photos bucket
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            return {
                bucketName: "photos",
                filename: `${Date.now()}_${file.originalname}`,
            }
        } else {
            //Otherwise save to default bucket
            return `${Date.now()}_${file.originalname}`
        }
    },
})

// Set multer storage engine to the newly created object
const upload = multer({ storage })

router.post("/save", upload.single("image"), async (req, res) => {
    const file = req.file
    // Respond with the file details

    const category = new Category({
        category: req.body.category,
        image: file.originalname, // Make sure the field name is consistent with your Category schema
    });
    /*res.send({
        message: "Uploaded",
        id: file.id,
        name: file.filename,
        contentType: file.contentType,
        category
    })*/
    try {
        const save = await category.save()
        res.json(save)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/getAll',async (req, res) =>{
    try {
        const get = await Category.find()
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.delete('/delete/:id',async (req, res) =>{
    try {
        const get = await Category.findById(req.params.id)
        const response = await get.remove()
        res.json(response)
    }catch (error) {
        res.send('Error : '+error)
    }
})


router.get('/get/:id',async (req, res) =>{
    try {
        const get = await Category.findById(req.params.id)
        res.json(get)
    }catch (error) {
        res.send('Error : '+error)
    }
})

module.exports = router