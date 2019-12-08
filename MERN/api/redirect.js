const express = require('express');

const router = express.Router();

const Links = require('../models/links');

/*
 *
 * REDIRECT
 *
 * get requests with a link id (redirectId) as a parameter
 *
 * should do the following two things
 * - add a click (+1) to the link's data
 * - should get the link's redirect url and redirect to that url
 *
 */
router.get('/:redirectId', async (req, res) => {
  // get today's date and put it in an variable
  const date = new Date();

  // format the date's variable
  const today = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;

  // use the parameter's given id and use mongoose to query and put it in a variable
  const redirect = await Links.findOne({redirectId: req.params.redirectId});

  // if date does not exists add date and 1 clock
  // else find date and increment one click
  (await redirect.data.some(item => item.date === today))
    ? Links.findOneAndUpdate(
        {
          redirectId: req.params.redirectId,
          'data.date': today,
        },
        {$inc: {'data.$.clicks': 1}},
      ).then(result => {
        res.redirect(result.link);
      })
    : Links.findOneAndUpdate(
        {redirectId: req.params.redirectId},
        {data: {date: today, clicks: 1}},
      ).then(result => {
        res.redirect(result.link);
      });
});

module.exports = router;
