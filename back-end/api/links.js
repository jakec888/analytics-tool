const express = require('express')

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

router.post('/link', async (req, res) => {
  const { userId, link, title, date, data } = req.body

  const myData = new Links({
    userId,
    link,
    title,
    date,
    data
  })

  myData.save().then((result) => {
    res.json(result)
  })
})

router.get('/working', (req, res) => res.json({ working: true }))

module.exports = router