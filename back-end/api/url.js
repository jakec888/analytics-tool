const express = require('express')
const uuid = require('uuid')

const router = express.Router()

router.get('/working', (req, res) => res.json({ working: true, id: uuid.v4() }))

module.exports = router
