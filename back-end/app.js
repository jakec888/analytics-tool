const express = require('express')

const app = express()

const port = 3001

app.use(express.json())

app.use('/api', require('./api/url'))

app.listen(port, () => console.log(`http://localhost:${port}`))
