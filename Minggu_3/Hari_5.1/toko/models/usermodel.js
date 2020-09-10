const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    level: {
        type: String
    }
});

mongoose.model('user', userSchema);