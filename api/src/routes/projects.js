const { Router } = require('express');
const router = Router();
const projects = require('../controllers/project')

//Guardar Proyecto
router.post('/createProject', projects.createProject)

//encontrar todos los proyectos
router.get('/findAllProject', projects.findAllProject)
//encontrar todos los proyectos
router.get('/findOneProject', projects.findOneProject)
//encontrar todos los proyectos
router.get('/findFullDataProject', projects.findFullDataProject)
 //encontrar todos los proyectos
router.get('/deleteProject', projects.deleteProject)
 

module.exports = router;
