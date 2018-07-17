const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

UserSchema.plugin(passportLocalMongoose);

const UserModel = mongoose.model('Users', UserSchema);
module.exports = {
    userModel: UserModel,
    UserSchema: UserSchema
};