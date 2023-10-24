const mongoose = require('mongoose');
const{Schema, model} = mongoose;

const UserSchema = new Schema({
    usename: {
        type: String,
        required: true,
        min: 4,
        unique: true,
            },
    paasword: {
        type: String,
        required: true
    },
});

const UserModel = model('User', UserSchema);

module.exports= UserModel;