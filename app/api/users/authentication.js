const passport = require('passport');
const mongoose = require('mongoose');
const Users = mongoose.model('Users');

module.exports.register = (req, res) => {

    // if(!req.body.name || !req.body.email || !req.body.password) {
    //   sendJSONresponse(res, 400, {
    //     "message": "All fields required"
    //   });
    //   return;
    // }
    // var data = {
    //     local: {
    //         name: model.req.body.name,
    //         email: req.body.email,
    //     }
    // }

    var user = new Users();

    user.local.name = req.body.name;
    user.local.email = req.body.email;

    user.setPassword(req.body.password);
    console.log("Password has been set. Saving now!");
    user.save(function(err) {
        var token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token": token
        });
    });

};

module.exports.login = (req, res) => {
    // if(!req.body.name || !req.body.email || !req.body.password) {
    //   sendJSONresponse(res, 400, {
    //     "message": "All fields required"
    //   });
    //   return;
    // }

    passport.authenticate('local', function(err, user, info) {
        var token;

        if (err) {
            res.status(400).json(err);
            return;
        }

        if (user) {
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token": token
            });
        } else {
            res.satus(400).json(info);
        }

    })(req, res);

};