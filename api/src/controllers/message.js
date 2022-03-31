const { LEGAL_TCP_SOCKET_OPTIONS } = require('mongodb');
const Message = require('../models/message');
  
 

const saveMessage = async (req, res) => {
     
    let { email,message,idProducto} = req.body;
    //return res.send({ email,lastName,firstName,password})
    //console.log(req.body)
     
        newMessage = new Message({
            email,
            message,
            idProducto
        })
  
  
   
    try {
        
        let message = await newMessage.save();
        
        res.status(200).json({
            msg: "Added Succefully",   //agregado exitosamente
            message
        });
    } catch (error) {
        res.status(400).json({
            msg: "Couldn't create please try again"
        });
    }
};

const findAllMessage = async (req, res) => {
    const {idProducto} = req.query
    try {
        const allMessages = await Message.find({idProducto:idProducto});
        res.status(200).json(allMessages);
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "Cannot get users"
        })
    }
}

    module.exports = {
        saveMessage,
        findAllMessage
     
    }
