const { Router } = require('express');

const projectRoute = require('./projects');
const userRoute = require('./users');
const messageRoute = require('./messages');

const router = Router();

 
router.use('/project', projectRoute);
router.use('/user', userRoute);
router.use('/message', messageRoute);
 

module.exports = router;
