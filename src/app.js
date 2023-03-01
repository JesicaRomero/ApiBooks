const express = require('express')
const cors = require('cors')

const { userRoutes, bookRoutes } = require('./routes')
const errorHandling = require('./error/errorHandling')

const app = express()

app.use(express.json())
app.use(cors())
app.use(userRoutes)
app.use(bookRoutes)
app.use(errorHandling.notFound)
app.use(errorHandling.internalServer)

module.exports = app
