const express = require('express');

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
  const today = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;

  // use the parameter's given id and use mongoose to query and put it in a variable
  const redirect = await Links.findOne({redirectId: req.params.redirectId});

  // if date does not exists add date and 1 clock
  // else find date and increment one click
  (await redirect.analytics.some(item => item.date === today))
    ? Links.findOneAndUpdate(
        {
          redirectId: req.params.redirectId,
          'analytics.date': today,
        },
        {$inc: {'analytics.$.clicks': 1}},
      ).then(result => {
        res.status(200).redirect(result.link);
      })
    : Links.findOneAndUpdate(
        {redirectId: req.params.redirectId},
        {analytics: {date: today, clicks: 1}},
      ).then(result => {
        res.status(200).redirect(result.link);
      });
});

module.exports = router;
