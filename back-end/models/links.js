const mongoose = require('mongoose')

const linkSchema = mongoose.Schema({
  userId: String,
  link: String,
  title: String,
  date: String,
  data: [],
  links: [{
    link: String,
    title: String,
    date: String,
    data: [
      { date: String, clicks: Number }]
  }]
})

const Links = mongoose.model('links', linkSchema)

module.exports = Links
