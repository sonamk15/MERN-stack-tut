const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
     name:String,
     age:Number,
     email:String,
     mobile:Number,
     address:String,
     role:String
})

module.exports = mongoose.model('Employee', EmployeeSchema);
