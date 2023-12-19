const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name:String,
    Email:String,
    Age:Number
});

module.exports = mongoose.model('user',UserSchema);
