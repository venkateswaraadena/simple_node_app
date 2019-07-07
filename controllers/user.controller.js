const User = require('../models/user.model');
const configValues = require('../configurations/const');
var jwt    = require('jsonwebtoken');


exports.user_create = function(req,res) {
    try {
        let user = new User({
            Email : req.body.email,
            UserName : req.body.username,
            Password : req.body.password,
            UserType : req.body.usertype,
            UserRole : req.body.userrole
        });
        user.save(function(err) {
            if(err) {
                res.send(err);
            }
            res.send({status : 200 , message : "User Created successfully"});
        });
    } catch(ex) {
        //console.log(ex);
        res.end();
    }
};

exports.user_details = function(req,res) {
   try {
    User.findById(req.params.id,function(err,user) {
        if(err) {
            res.send(err);
        }
        res.send(user);
    });
   } catch(ex) {
       console.log(ex);
       res.end();
   }
};

exports.user_login = function(req,res) {
    try {
        User.findOne(req.body,function(err,user) {
            if (err) throw err;    
            if (!user) {
                res.json({ success: false, message: 'Authentication failed. User not found.' });
              } else if (user) {
                if (user.password != req.body.password) {
                  res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                } else {
              const payload = {
                admin: true     };
                  var token = jwt.sign(payload, configValues.superSecret, {
                    expiresIn : '30m' // expires in 24 hours
                  });
          
                  res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                  });
                } 
              }
        });
    } catch(ex) {
        console.log(ex);
        res.end();
    }
};

exports.user_update = function(req,res) {
   try {
    User.findByIdAndUpdate(req.params.id,{$set : req.body}, function(err,user) {
        if(err) {
            res.send(err)
        }
        res.send('User Updated');
    });
   } catch(ex) {
       console.log(ex);
       res.end();
   }
};

exports.user_delete = function(req,res) {
    try {
        User.findByIdAndRemove(req.params.id,function(err) {
            if(err) {
                res.send(err);
            }
            res.send("Deleted successfully");
        }); 
    } catch(ex) {
        console.log(ex);
        res.end();
    }
};

exports.users = function(req,res) {
   try {
    User.find(function(err,users) {
        if(err) {
            res.send(err);
        }
        res.send(users);
    });
   } catch(ex) {
       console.log(ex);
       res.end();
   }
};