const mongoose = require('mongoose');

const linkSchema = mongoose.Schema({
  userId: String,
  redirectId: String,
  redirectURL: String,
  link: String,
  title: String,
  date: String,
  data: [],
});

const Links = mongoose.model('links', linkSchema);

module.exports = Links;
