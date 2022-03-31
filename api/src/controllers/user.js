const { LEGAL_TCP_SOCKET_OPTIONS } = require('mongodb');
const User = require('../models/user');
const axios = require('axios').default;
 

const createUser = async (req, res) => {
     
    let { email,lastName,firstName,password,role} = req.body;
    //return res.send({ email,lastName,firstName,password})
    //  console.log(req.body)
    if (email && lastName && firstName && password && role) {
        newUser = new User({
            email,
            lastName,
            firstName,
            password,
            role
        })
    }
 
    let user = await User.findOne({ email: email })
    // console.log(user)
    if (user) {
        return res.status(200).json({
            message: 'error',
            user
        })
    }
   
   
    try {
        
        let user = await newUser.save();
        
        res.status(200).json({
            message: "ok",   //agregado exitosamente
            user
        });
    } catch (error) {
        
        res.status(400).json({
            message: "error",
            user:''
        });
    }
};

const findUser = async (req, res) => {
    let { email,password} = req.body;
    console.log(req.body)
 
    if (email) {
        try {
            let user = await User.findOne({ email: email });
            console.log(user)
           if(user){ 
              if(user.password === password){
                    res.status(200).json({
                        message: 'ok',
                        user
                    })
                }
            else {
                res.status(200).json({
                    message: 'x',
                    user
                })
            }
           }
           else{
            res.status(404).json({
                message: 'User not Found',
                user
            })
           }
        }
        catch (error) {
            res.status(404).json({
                message: 'User not Found',
                error
            })
        }
    }
    else {
        res.status(404).json({
            message: 'email vacio',
           
        })
    }
}

 

 

    module.exports = {
        createUser,
        findUser
         
    }
