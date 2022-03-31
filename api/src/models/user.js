const mongoose = require('mongoose');
const { Schema } = mongoose;

// User Schema
const UserSchema = new Schema({
    email: { 
        type: String
         
    },
     firstName: {
        type: String
    },
    lastName: {
        type: String
    } ,
    password: {
        type: String
    } ,
    role: {
        type: String
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;