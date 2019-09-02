const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const port = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.use('/api', require('./api/links'))
app.use('/redirect', require('./api/redirect'))

app.use((req, res, next) => {
  res.status(404).json({ error: "Sorry can't find that!" })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send({ error: err.stack })
})

mongoose.connect('mongodb://localhost:27017/linkshortner', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mongoose database: linkshortner')
})

app.listen(port, () => console.log(`Express Running On --> http://localhost:${port}`))
