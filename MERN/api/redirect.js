const express = require('express')

const router = express.Router()

const Links = require('../models/links')

router.get('/:redirectId', async (req, res) => {
  // if date does not exists add date and 1 clock
  // else find date and increment one click
  const date = new Date()

  const today = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`

  const redirect = await Links.findOne({ redirectId: req.params.redirectId })

  await redirect.data.some(item => item.date === today) ? (Links.findOneAndUpdate(
    {
      redirectId: req.params.redirectId,
      'data.date': today
    },
    { $inc: { 'data.$.clicks': 1 } }
  ).then(result => {
    res.redirect(result.link)
  })) : (Links.findOneAndUpdate(
    { redirectId: req.params.redirectId },
    { data: { date: today, clicks: 1 } }
  ).then(result => {
    res.redirect(result.link)
  }))
})

module.exports = router
