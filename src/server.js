const app = require('./app')
require('dotenv').config()

const { PORT } = process.env

const port = PORT || 3000

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
