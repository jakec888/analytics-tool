const express = require('express')

const router = express.Router()

const Links = require('../models/links')

// router.get('/:redirectId', (req, res) => {
//   // if date does not exists add date and 1 clock
//   // else find date and increment one click

//   // find and redirect
//   // Links.findOne({ redirectId: req.params.redirectId }).then(result => {
//   //   res.redirect(result.link)
//   // })

//   // const date = new Date()

//   // Links.findOneAndUpdate(
//   //   { redirectId: req.params.redirectId },
//   //   { $push: { data: update } }
//   // ).then(result => {
//   //   res.redirect(result.link)
//   // })

//   // Links.bulkwrite(
//   //   [
//   //     {
//   //       updateOne: {
//   //         filter: {
//   //           redirectId: req.params.redirectId,
//   //           "links.date": { $exists: false }
//   //          },
//   //         update: {
//   //           $inc: {
//   //             'articles.$.amount': 'zzzz'
//   //           }
//   //         }
//   //       }
//   //     },
//   //     {
//   //       updateOne: {
//   //         filter: {
//   //           redirectId: req.params.redirectId,
//   //           links: {
//   //             $elemMatch: {
//   //               date: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`
//   //             }
//   //           }
//   //         },
//   //         update: {$inc : {'links.clicks' : 1}
//   //       }
//   //     },
//   //   ]
//   // )

//   // let date = new Date();
//   // const update = {
//   //   date: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
//   //   {$inc : {clicks : 1} }
//   // }

//   // Links.findOneAndUpdate(
//   //   { redirectId: req.params.redirectId },
//   //   { $push: { data: update } }
//   // ).then(result => {
//   //   res.redirect(result.link)
//   // })
// })

router.get('/:redirectId', async (req, res) => {
  // if date does not exists add date and 1 clock
  // else find date and increment one click

  const date = new Date()

  const today = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`

  const redirect = await Links.findOne({ redirectId: req.params.redirectId })

  await console.log(redirect)

  await console.log(redirect.data.some(item => item.date === today))

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
