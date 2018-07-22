var mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
    // email: {
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    // name: {
    //     type: String,
    //     required: true
    // },
    // hash: String,
    // salt: String
    local: {
        // username: String,
        email: String,
        name: String,
        // password: String
        hash: String,
        salt: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    facebook: {
        id: String,
        token: String,
        name: String,
        email: String
    }
});

// UserSchema.plugin(passportLocalMongoose);

// generating a hash
UserSchema.methods.setPassword = function(password) {
    this.local.salt = crypto.randomBytes(16).toString('hex');
    this.local.hash = crypto.pbkdf2Sync(password, this.local.salt, 1000, 64, 'sha512').toString('hex');
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.local.salt, 1000, 64, 'sha512').toString('hex');
    return this.local.hash === hash;
};

// Generate api web token for user
UserSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.local.email,
        name: this.local.name,
        exp: parseInt(expiry.getTime() / 1000)
    }, "secret?notsomuch");
};


// const UserModel = mongoose.model('Users', UserSchema);
mongoose.model('Users', UserSchema);
// module.exports = {
//     userModel: UserModel,
//     userSchema: UserSchema
// };