import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link, useLocation   } from "react-router-dom";
export function Consultas() {
  //const { userId } = useParams();
 const [res, setRes] = useState('')
 const location = useLocation();
  const navigate = useNavigate();

//   const handleDelete = () => {
//     deleteUser(+userId);
//     navigate("/users");
//   };

//   if (!user) {
//     return <div>No se encuentra el usuario</div>;
//   }

useEffect(() => {
    axios.get('http://localhost:3001/project/findFullDataProject')
    .then(function (response) {
      // handle success
      setRes(response.data)
     // console.log(response);
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
 
 
  
}, [])



  return (
      <div className="containerCard">
     
      {
    res?  res.map((el,i)=>
      
    {
            let x ="'"+el._id+"'";
           let imx=el.img.split('/') 
         //  console.log(imx[3])
           let imgx = require('../img/'+imx[3].toString())
          // console.log(imgx.default)
            return (
                
        <>
        <div  className="card" >

            <div>
            {/* <Link to={'Uno'+el._id.toString() + location.search}> <img src={imgx.default} className="img"/></Link>  */}
            <Link to={'/Uno'} state={{ producId: el._id }}> <img src={imgx.default} className="img"/></Link> 
            </div>
            <div class="res_con"> 
                <div  className="respuesta">Nombre: {el.name}</div>
              
             </div>
        </div>
        </>
        )
        }
    


      
    )
     
    :<p>VAcio</p>
      }
  </div>
);
}
// { res.map((el,i)=>{
//     let x ="'"+el._id+"'";
//     return <p>{el}</p>
//     return (
// <>
// <div  className="card" onclick="window.location='consultarUno.html?'+${x}">
//     <div><img  src={el.img} /></div>
//     <div class="res_con"> 
//         <div  className="respuesta">Nombre: {el.name}</div>
      
//      </div>
// </div>
// </>
// )
// })
// }
