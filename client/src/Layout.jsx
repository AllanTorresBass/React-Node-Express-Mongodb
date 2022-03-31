import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export function Layout() {
  let user=localStorage.getItem('userName');

  let navigate = useNavigate();
  let admin=localStorage.getItem('admin');
  if(user){admin='123'}
  useEffect(() => {
    if(!admin){
      alert('Debe iniciar sesion.',user)
      
      navigate('/');
    }
     
       
  }, [admin,user])
  
  return (
    <>
    {/* <main>
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">Users</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </main> */}
    <div className="nav">
    <Link to="/consultas" className="a">Consultar</Link>
   {!user
   ?<Link to="/about" className="a">Registrar</Link>
   :<Link to="/noticias" className="a">Noticias</Link>
   }
    <Link to="/" className="a">Logout</Link>
         
       
        
    </div>
    <section>
        <Outlet />
      </section>
    </>
  );
}
