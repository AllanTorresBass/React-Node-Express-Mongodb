
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export function Home() {
  localStorage.removeItem('userId');
  localStorage.removeItem('userName');
  localStorage.removeItem('admin');

  const [input, setInput] = useState({email:'',password:''})
  const [inputu, setInputU] = useState({role:'user'})
  const [errorPassword, setErrorPassword] = useState('')
  
  let navigate = useNavigate();
   
  function handleInput(e) {
  
    setInput({ ...input, [e.target.name]: e.target.value });

  }
  function handleInputU(e) {
  
    setInputU({ ...inputu, [e.target.name]: e.target.value });

  }
  const handleLogin =(e)=>{
    e.preventDefault();
  
    axios.post('http://172.31.208.1:3001/user', 
      input
    )
    .then(function (res) {
      console.log(res.data.message);
      if(res.data.message==='x'){setErrorPassword('constraseña incorrecta.')}
      if(res.data.message==='ok'){
        if(res.data.user.role==='admin'){
          //localStorage.setItem('usuario', obj.user);
         localStorage.setItem('admin', res.data.user._id);
           
         return navigate('/consultas');
        }
         if(res.data.user.role==='user'){
          localStorage.setItem('userId', res.data.user._id);
          localStorage.setItem('userName', res.data.user.firstName);
           
          navigate('/consultas');
          }
          //return window.location='consulta.html'
         
       }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleUser =(e)=>{
    e.preventDefault();
    if(document.getElementById("password").value!=document.getElementById("veryPassword").value){
      return alert('Las contraseñas deben ser iguales')
    }
    axios.post('http://172.31.208.1:3001/user/signup', 
      inputu
    )
    .then(function (res) {
      console.log(res.data);
      if(res.data.message==='ok'){
        alert(`El usuario ${res.data.user.firstName} se guardo correctamente`)
       return window.location='?';
      }
      
      else{
        alert(`ERROR, El usuario ya existe`)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
return  <div>
   
   <div className="div animation">Marketplace SEBAS</div> 
         <div className="div animation"> <br/>
            <span>vive una gran experiencia</span>
        </div>

      <span className="container">
  
         <span className="row">
            <span className="neons col-12">
              <h1><em>Lo mejor en compra y ventas</em></h1>
            </span>
         </span>
      </span>
<section>
  <a href="#miModal"><button type="submit" className='input_submit_index' value="">_  ENTRAR  _</button></a>
  <a href="#registrarse"><button type="submit" className='input_submit_index' value="">_  REGISTRARSE  _</button></a>
 </section>

<section id="miModal" className="modal">

  <section className="modal-contenido">
    <a href="#" style={{width:'10%'}}><button type="submit" class="X"  value="">X</button></a>
   
    <p>Iniciar sesion</p> 
   
     
    <form id="formLogin" className='input' onSubmit={(e)=>handleLogin(e)}>
      <input 
       className='inputLogin__box' 
       type="text" 
       name="email" 
       id="descripcion" 
       required="required" 
       placeholder="Ingrese su correo"
       onChange={handleInput}
       />
     
     <input 
       className='inputLogin__box' 
       type="password" 
       name="password" 
       id="descripcion" 
       required="required" 
       placeholder="Ingrese su contraseña"
       onChange={handleInput}
       />
     
     <button type="submit" className='input_submit' value="">GO</button>
     </form>
     <span className='errorPassword'>{errorPassword}</span>
  </section>  
</section>
<section id="registrarse" className="registro">
    <section className="modal-Registro">
      <a href="#" style={{width:"10%"}}><button type="submit" className="X"  value="">X</button></a>
      <section id="containerRegister"></section>
      <form id="formRegister" className='input' onSubmit={(e)=>handleUser(e)}>
     
        
             <p>Registrarse</p>
        
       
       <input 
       className='inputLogin__box' 
       type="text" 
       name="firstName" 
       id="descripcion" 
       required="required" 
       placeholder="Ingrese su nombre"
       onChange={handleInputU}
       />
     
     <input 
         className='inputLogin__box' 
         type="text" 
         name="lastName" 
         id="descripcion" 
         required="required" 
         placeholder="Ingrese su apellido"
         onChange={handleInputU}
         />
      
       <input 
         className='inputLogin__box' 
         type="text" 
         name="email" 
         id="descripcion" 
         required="required" 
         placeholder="Ingrese su correo"
         onChange={handleInputU}
         />
      
      
      <input 
         className='inputLogin__box' 
         type="password" 
         name="password" 
         id="password" 
         required="required" 
         placeholder="Ingrese su contraseña"
         onChange={handleInputU}
         />
       
       <input 
       className='inputLogin__box' 
       type="password" 
       name="veryPassword" 
       id="veryPassword" 
       required="required" 
       placeholder="Verificar contraseña"
       onChange={handleInputU}
       />
     
     <select id="cars" name="role"  onChange={handleInputU} className='inputLogin__select' >
      <option selected  value="user">user</option>
      <option value="admin">admin</option>
      
   
    </select>
     
     {/* <input type="submit" className='input_submit' value="go" />  */}
     <button type="submit" className='input_submit' value="">GO</button>
       </form>
    </section>  
  </section>
    
  </div> 
  
}
