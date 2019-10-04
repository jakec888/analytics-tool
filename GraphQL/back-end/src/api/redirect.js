import express from 'express'
import Links from '../models/link'

const router = express.Router()

router.get('/test', (req, res) => {
  res.json({working: true})
})

router.get('/:redirectId', async (req, res) => {
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

// module.exports = router
export default router