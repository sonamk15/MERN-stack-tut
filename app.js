const express = require('express')
const app = express()

// set up mongoose connection
const mongoose = require('mongoose')
const dbUrl = 'mongodb://localhost:27017/test';
mongoose.connect(dbUrl, (err, client)=>{
    if(err) throw err
    console.log("db connect with mongodb")
})

const bodyParser = require('body-parser')
const user = require('./routes/user.routes')
app.use(bodyParser.json())
app.use('/user', user)


app.get('/', (req,res) => {
    res.send('Hello World')
})

app.listen(3000, function (){
    console.log('listening on http://localhost:3000')
})