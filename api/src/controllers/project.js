const { LEGAL_TCP_SOCKET_OPTIONS } = require('mongodb');
const Project = require('../models/project');
 
const axios = require('axios').default;


const createProject = async (req, res) => {
    //creamos el objeto producto
    let { nombre, descripcion, precio, file } = req.body;

console.log(req.body)
 console.log(req.files.file)
   let EDFile = req.files.file
   let name=nombre, description=descripcion,img=`../api/files/${EDFile.name}`;
    EDFile.mv(`./files/${EDFile.name}`,async(err) => {
        if(err) return res.status(500).send({ message : err })

        newProject = new Project({
            name,description,precio,img
        })
    
 
    try {
        let project = await newProject.save();
        res.status(200).json({
            message: "Ok",   //agregado exitosamente
            project
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't create please try again"
        });
    }
    })
    
    
   
};
const findAllProject = async (req, res) => {
    try {
        const allProjects = await Project.find().sort({$natural:-1}).limit(1);;
        res.status(200).json(allProjects);
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "Cannot get users"
        })
    }
}
const findOneProject = async (req, res) => {
    const {id} = req.query
    let obj={id:id}
    try {
        const allProjects = await Project.findById({_id:id})
       
        
        obj={allProjects,imgClean:String(allProjects.img.split('/').splice(3))}
        console.log(obj)
        res.status(200).json(obj);
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "Cannot get projects"
        })
    }
}
 
const findFullDataProject = async (req, res) => {
    const {id} = req.query
      
    try {
        const obj = await Project.find();
        res.status(200).json(obj);
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "Cannot get data"
        })
    }
}

const deleteProject = async (req, res) => {
    const { id } = req.query;
    try {
        await Project.findByIdAndDelete(id)
            .then(u => res.status(200).json(
                {
                    message: 'OK',
                    deletedUser: u
                }
            )
            )
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: "The project couldn't be deleted. Try again"
        })

    }
}
 
    module.exports = {
        createProject,
        findAllProject,
        findOneProject,
        findFullDataProject,
        deleteProject
       
    }
