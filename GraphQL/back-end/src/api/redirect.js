import express from 'express'
import { Link } from '../models/link'

const router = express.Router()

router.get('/test', (req, res) => {
  res.json({working: true})
})

router.get('/:redirectId', async (req, res) => {
  // if date does not exists add date and 1 clock
  // else find date and increment one click
  const date = new Date()

  const today = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`

  const redirect = await Link.findOne({ redirectId: req.params.redirectId })

  await redirect.data.some(item => item.date === today) ? (Link.findOneAndUpdate(
    {
      redirectId: req.params.redirectId,
      'data.date': today
    },
    { $inc: { 'data.$.clicks': 1 } }
  ).then(result => {
    res.redirect(result.link)
  })) : (Link.findOneAndUpdate(
    { redirectId: req.params.redirectId },
    { data: { date: today, clicks: 1 } }
  ).then(result => {
    res.redirect(result.link)
  }))
})

export default router
