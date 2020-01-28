const JWT = require('jsonwebtoken');
const User = require('../models/users');

const verifyAuth = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  const data = JWT.verify(token, 'ThisIsTheJwtKey');
  try {
    const user = await User.findOne({_id: data._id, 'tokens.token': token});
    if (!user) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({error: 'Not Authorized'});
  }
};

module.exports = verifyAuth;
