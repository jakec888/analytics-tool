const express = require('express')

const app = express()

const port = 3001

app.use(express.json())

app.use('/api', require('./api/url'))

app.use((req, res, next) => {
  res.status(404).json({ error: "Sorry can't find that!" })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send({ error: err.stack })
})

app.listen(port, () => console.log(`http://localhost:${port}`))
