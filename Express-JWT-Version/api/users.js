const express = require('express');
const verifyAuth = require('../middleware/auth');

const User = require('../models/users');

const router = express.Router();

router.post('/signup', async (req, res) => {
  console.log('signup!');
  console.log(req.body);
  // Create a new user
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(200).send({user, token});
  } catch (error) {
    res.status(200).send(error);
  }
});

router.post('/login', async (req, res) => {
  //Login a registered user
  try {
    const {email, password} = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res
        .status(200)
        .send({error: 'Login failed! Check authentication credentials'});
    }
    const token = await user.generateAuthToken();
    res.status(200).send({user, token});
  } catch (error) {
    res.status(200).send(error);
  }
});

// router.get('/me', verifyAuth, async(req, res) => {
//     // View logged in user profile
//     res.status(200).send(req.user)
// })

router.post('/logout', verifyAuth, async (req, res) => {
  // Log user out of the application
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token != req.token;
    });
    await req.user.save();
    res.status(200).send();
  } catch (error) {
    res.status(200).send(error);
  }
});

// router.post('/me/logoutall', verifyAuth, async(req, res) => {
//     // Log user out of all devices
//     try {
//         req.user.tokens.splice(0, req.user.tokens.length)
//         await req.user.save()
//         res.status(200).send()
//     } catch (error) {
//         res.status(200).send(error)
//     }
// })

module.exports = router;
