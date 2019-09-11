const express = require('express')
const uuid = require('uuid')

const router = express.Router()

const Links = require('../models/links')

router.get('/links/:userId', (req, res) => {
  Links.find({ userId: req.params.userId }).then(result => res.json(result))
})

router.post('/link', (req, res) => {
  const { userId, link, title, date, data } = req.body

  const protocol = req.protocol
  const host = req.headers.host
  const redirectId = uuid.v4()

  const redirectURL = `${protocol}://${host}/redirect/${redirectId}`

  const myData = new Links({
    redirectId,
    redirectURL,
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

module.exports = router
