const express = require('express')
const uuid = require('uuid')

const router = express.Router()

const Links = require('../models/links')

router.get('/', (req, res) => {
  Links.find({}, (err, foundLinks) => {
    if (err) {
      res.json(err)
    }
    res.json(foundLinks)
  })
})

router.post('/link', (req, res) => {
  const { id, link, title, date, data } = req.body
  const givenData = {
    id,
    link,
    title,
    date,
    data
  }
  res.json({ data: givenData })
})

router.get('/working', (req, res) => res.json({ working: true, id: uuid.v4() }))

module.exports = router
