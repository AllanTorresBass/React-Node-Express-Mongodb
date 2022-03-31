const mongoose = require('mongoose');
const { Schema } = mongoose;

// User Schema
const MessageSchema = new Schema({
    idProducto: { 
        type: String   
    },
    email: { 
        type: String
         
    },
     message: {
        type: String
    } 
});

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;