const { Router } = require('express');
const router = Router();
const Messages = require('../controllers/message')
 
//registrarse
router.post('/save', Messages.saveMessage)


 

// //todos los usuarios
  router.get('/find', Messages.findAllMessage)
  
 

module.exports = router;
