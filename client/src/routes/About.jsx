import axios from "axios";
import { useState } from "react";

import { useNavigate } from 'react-router-dom';

export function About() {
  const [input, setInput] = useState({nombre:'',descripcion:'',precio:'',file:''})
  const [file, setFile] = useState();
  function handleInput(e) {
  
    setInput({ ...input, [e.target.name]: e.target.value });

  }
   
  let navigate = useNavigate();
  const saveFile = (e) => {
    
    setInput({ ...input, file: e.target.files[0] });
     setFile(e.target.files[0]);
    // setFileName(e.target.files[0].name);
  };
  const handleRegister =(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("nombre",input.nombre );
    formData.append("descripcion",input.descripcion);
    formData.append("precio",input.precio);
    console.log(formData)
    axios.post('http://localhost:3001/project/createProject', 
      //input
      formData
    )
    .then(function (res) {
       
           alert('Se guardó correctamente')
       navigate('/consultas');
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return(
   <div style={{width:'100%',marginLeft:'5%'}}> 
     <p className="cabecera">
         Registrar Producto
     </p>
    <form enctype="multipart/form-data" id="formuploadajax" class='input_' onSubmit={(e)=>handleRegister(e)}>
       
    <input onChange={handleInput} class='input__box_' type="text" name="nombre" id="nombre" required="required" placeholder="Ingrese el nombre" />
           <input onChange={handleInput} class='input__box_' type="text" name="descripcion" id="descripcion" required="required" placeholder="Ingrese la descripcion" />

            <input onChange={handleInput} class='input__box_' placeholder="Ingrese el precio" type="text" name="precio" id="precio" required="required" />
            <input onChange={saveFile} class='input__box_' placeholder="Seleccione una imagen" type="file" name="file" required="required" id="file" accept="image/png, image/gif, image/jpeg" />
        

 
    
    <input type="submit" class='input_submit_' value="Subir archivos"/>
</form>
</div>
  ) 
    
 }
