const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
     employeId:Number,
     name:String,
     age:Number,
     email:String,
     mobile:Number,
     address:String,
     role:String
})

module.exports = mongoose.model('Employee', EmployeeSchema);
