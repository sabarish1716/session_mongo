const express = require('express')
const router = express.Router()
const subject = require('./subject')

router.use('/subject',subject)

module.exports = router