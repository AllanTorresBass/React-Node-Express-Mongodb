const { Router } = require('express');
const router = Router();
const users = require('../controllers/user')
 
//registrarse
router.post('/signup', users.createUser)



 
    
// encontrar usuario
router.post('/', users.findUser)

 

 

module.exports = router;
