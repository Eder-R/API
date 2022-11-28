const router = require('express').Router()
const userController = require('./controllers/userController')

router.post('/', userController.list)

module.exports= router