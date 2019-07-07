const jwt = require('jsonwebtoken');
const configValues = require('../configurations/const');


function isAuthenticate(req,res,next) {
    try{
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        if (token) {
          jwt.verify(token, configValues.superSecret, function(err, decoded) {       
              if (err) {
                  return res.json({ success: false, message: 'Failed to authenticate token.' });       
              } else {
                  req.decoded = decoded;         
                  next();
              }
          });
      
        } else {
          return res.status(403).send({ 
              success: false, 
              message: 'No token provided.' 
          });
      
        }
    } catch(ex) {
        console.log(ex);
        res.end();
    }
  
}

module.exports = isAuthenticate;