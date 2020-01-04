const express = require('express');
const uuid = require('uuid');

const router = express.Router();

const Links = require('../models/links');

/*
 *
 * CREATE
 *
 *
 * CREATE
 *
 * post request that takes in the following:
 * - a user id
 * - url/link
 * - title
 * - date
 * - analytics
 * -- when creating a link analytics is often a list (that is empty) that includes
   object of date and click
 *
 * should return the input but with mongo id (_id)
 *
 */
router.post('/link', (req, res) => {
  const {userId, link, title, date, data} = req.body;

  const protocol = req.protocol;
  const host = req.headers.host;
  const redirectId = uuid.v4();

  const redirectURL = `${protocol}://${host}/redirect/${redirectId}`;

  const myData = new Links({
    redirectId,
    redirectURL,
    userId,
    link,
    title,
    date,
    analytics,
  });

  myData.save().then(result => {
    res.json(result);
  });
});

/*
 * READ
 *
 * get request that includes the user's id (userId) as a parameter
 *
 * should return a list of object of the user's links
 *
 */
router.get('/links/:userId', (req, res) => {
  Links.find({userId: req.params.userId}).then(result => res.json(result));
});

/*
 *
 * UPDATE
 *
 * put request that asks for link id (linkId) as a parameter
 * w/ the request body as an object of the link and it's
 * updated values
 *
 * should return the mongo version of the response as an object
 *
 */
router.put('/link/edit/:linkId', (req, res) => {
  Links.findByIdAndUpdate(req.params.linkId, req.body, {new: true}, function(
    err,
    link,
  ) {
    if (err) return next(err);
    res.send(link);
  });
});

/*
 * DELETE
 *
 * delete request that takes in the link id (linkId as a parameter)
 * the link id will be used by mongoose to delete the object
 *
 * should return a random string with a 200 code to show that the link
 * has been successfully delete the object
 *
 * should return a random string with a 200 code to show that the link
 * has been successfully deleted
 */
router.delete('/link/delete/:linkId', (req, res) => {
  Links.findByIdAndRemove(req.params.linkId, function(err) {
    if (err) return next(err);
    res.send('Deleted successfully!');
  });
});

module.exports = router;
