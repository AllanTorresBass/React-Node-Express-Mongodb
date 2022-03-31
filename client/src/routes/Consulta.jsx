import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useLocation } from "react-router-dom";
export function Consulta() {
  let user=localStorage.getItem('userName');

 
// const location = useLocation();
  const navigate = useNavigate();

 
  //const { producId } = useParams();
   
  const [msg, setMsg] = useState('')
  const [res, setRes] = useState('')
  const [imgx, setImgx] = useState('')
  const [imx, setImx] = useState([])
  const location = useLocation();
  const { producId } = location.state;
  //console.log(producId);
  
  useEffect(async() => {
   await axios.get("http://localhost:3001/project/findOneProject?id="+producId)
    .then(async(response) =>{
      
      setRes(response.data.allProjects)
      setImgx(response.data.imgClean)
      setImx([response.data.imgClean])
     
   //   let imgx = require('../img/'+img)

    //  setImx(imgx.default);
     
    })  
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  
   
  
}, [])


 
const deleteProject= (x)=>{
 
  axios.get("http://localhost:3001/project/deleteProject?id="+x).then(function(res){
  alert('Se eliminó comrrectamente.') 
  navigate('/consultas')

 console.log(res)
 setMsg('Se eliminó correctamente')   
    if(res){
     
         
    } else {
      alert("Error eliminando")
    }
});
}


  return (
   
   
   
   <div class="card2">
        {msg?(<section style={{color:'white',backgroundColor:'green'}}>{msg}</section>):('')}             
          <div> {
                     imx.map(el=>{console.log(el)
                      let xxx = require('../img/'+el.toString())
                     // console.log(xxx.default)
                        return <img src={xxx.default} className='img'/> 
                        })
                      }
            {/* {'../img/'+imgx} */}
          {/* {require('../img/'+imgx)} */}
            {/* <img src={require('../img/'+imx)}/> */}
            </div>
                  <div class="res_con"> 
                              <div class="respuesta">Nombre: {res.name}</div>
                              <div class="respuesta">Descripción: {res.description}</div>
                              <div class="respuesta">Precio: {res.precio}</div>
                   </div>  
        {!user?                     
          <input type="submit" value="Eliminar" class="input_submit" onClick={()=>deleteProject(producId)} />
        :(<></>)
        }
        </div>
   
  );
}
