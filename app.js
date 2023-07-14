const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/user')
const item = require('./routes/item')
const review = require('./routes/review')

const app=express()
const port = 4001

const url = 'mongodb://127.0.0.1/grocery'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

app.get('/', (req, res) => {
    res.send('Hello World!')
})

con.on("open", () => {
    console.log('MongoDB connected!');
})

app.use(express.json())

app.use('/user', user)
app.use('/item', item)
app.use('/review', review)

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})
