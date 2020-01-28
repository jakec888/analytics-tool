const express = require('express');
const verifyAuth = require('../middleware/auth');

const User = require('../models/users');

const router = express.Router();

/*
 *
 * Signup
 *
 * creates a new user
 *
 */
router.post('/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(200).json({user, token});
  } catch (error) {
    res.status(200).send(error);
  }
});

/*
 *
 * Login
 *
 * login a registered user
 *
 */
router.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res
        .status(200)
        .json({error: 'Login failed! Check authentication credentials!!!!'});
    }
    const idToken = await user.generateAuthToken();
    res.status(200).json({idToken, _id: user._id});
  } catch (error) {
    res.status(200).json({error: 'Wrong Credentials!!!!'});
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
