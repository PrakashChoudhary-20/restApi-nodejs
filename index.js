const express = require('express')
const app = express()
const routes = require('./routes/')
const dbConnection = require('./database/connection')

const port = 8002

app.use(express.json())

dbConnection()

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.use('/api/v1/dishes', routes)

app.listen(port, () => {
  console.log('Server started, running on port - ' + port)
})
