const express = require('express');
const uuid = require('uuid');
const verifyAuth = require('../middleware/auth');

const router = express.Router();

const Links = require('../models/links');

/*
 *
 * Todo: PASSPORT JS (protected routes)
 *
 * Ideally I wanted to do this first. Instead I choose for
 * the frontend to handle most of the auth. This isn't the
 * safest or good practice, but the goal was rapid itteration
 * and to keep up to date with this framework, hence the use of
 * aws cognito to handle auth.
 *
 * I will be adding add passport js; durring the weekend.
 *
 * I could also use https://www.npmjs.com/package/cognito-express
 *
 */

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
router.post('/link', verifyAuth, (req, res) => {
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
    res.status(200).json(result);
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
router.get('/links/:userId', verifyAuth, (req, res) => {
  Links.find({userId: req.params.userId}).then(result =>
    res.status(200).json(result),
  );
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
router.put('/link/edit/:linkId', verifyAuth, (req, res) => {
  Links.findByIdAndUpdate(req.params.linkId, req.body, {new: true}, function(
    err,
    link,
  ) {
    if (err) return next(err);
    res.status(200).send(link);
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
router.delete('/link/delete/:linkId', verifyAuth, (req, res) => {
  Links.findByIdAndRemove(req.params.linkId, function(err) {
    if (err) return next(err);
    res.status(200).send('Deleted successfully!');
  });
});

module.exports = router;
