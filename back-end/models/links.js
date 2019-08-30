const mongoose = require('mongoose')
const uuid = require('uuid')

const linkSchema = mongoose.Schema({
  // id: uuid.v4(),
  link: String,
  title: String,
  date: String,
  links: [{
    // id: uuid.v4(),
    link: String,
    title: String,
    date: String,
    data: [
      { date: String, clicks: Number } ] 
    }]
})

const Links = mongoose.model('Links', linkSchema)

module.exports = Links
