const express = require('express')

const router = express.Router()

const Links = require('../models/links')

router.get('/:redirectId', (req, res) => {
  Links.findOne({ redirectId: req.params.redirectId }).then(result => {
    res.redirect(result.link)
  })
})

module.exports = router
