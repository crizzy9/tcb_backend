var mongoose = require('mongoose');
var Users = mongoose.model('Users');

module.exports.profileRead = function(req, res) {

    if (!req.payload._id) {
        res.status(401).json({
            "message": "AutenticationError: Private Profile"
        });
    } else {
        Users
            .findById(req.payload._id)
            .exec((err, user) => {
                res.status(200).json(user);
            });
    }
};