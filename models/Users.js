const mongoose = require('mongoose')

const UserSchema =  new mongoose.Schema({
    employeeId:Number,
    username:String,
    password:String

})

module.exports = mongoose.model('User', UserSchema) 