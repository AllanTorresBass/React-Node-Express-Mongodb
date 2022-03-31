const mongoose = require('mongoose');
const { Schema } = mongoose;

// Projects Schema
const ProjectSchema = new Schema({
    name: { 
        type: String
        
    },
    description: {
        type: String
    },
    precio: {
        type: String
    },
    img: {
        type: String
    }
});

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;