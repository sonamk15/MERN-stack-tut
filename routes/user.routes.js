const { Router } = require('express')
const express = require('express')
const router =  express.Router()

const userController = require('../controllers/User.Controller')

router.get('/test', userController.test)

module.exports = router