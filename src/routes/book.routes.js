const express = require('express')
const { bookController } = require('../controllers')

const router = express.Router()

router.get('/books', bookController.find)
router.post('/books', bookController.create)
router.delete('/books', bookController.deleteOne)

module.exports = router
