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
  console.log('/link')
  // const { id, link, title, date, data } = req.body
  // const givenData = {
  //   id,
  //   link,
  //   title,
  //   date,
  //   data
  // }
  // console.log(givenData)
  // res.json({ data: givenData })

  /// //////
  const { id, link, title, date, data } = req.body

  const myData = new Links({
    id,
    link,
    title,
    date,
    data
  })

  myData.save().then((result) => {
    res.json({ data: result })
  })
})

router.get('/working', (req, res) => res.json({ working: true, id: uuid.v4() }))

module.exports = router
