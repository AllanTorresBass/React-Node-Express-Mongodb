import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useSearchParams, useLocation } from "react-router-dom";
 
 

export function Noticias() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
   
  const [noticias, setNoticias] = useState([])
  // http://api.mediastack.com/v1/news?access_key=b9f0d528f0cebf74183ae661477ecf1b&languages=en,-de
  useEffect(() => {
    axios.get('http://api.mediastack.com/v1/news?access_key=b9f0d528f0cebf74183ae661477ecf1b&languages=en,-de')
    .then(function (response) {
      // handle success
    
     console.log(response.data.data);
      setNoticias(response.data.data)
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
    <div  className="containerCard">
    {noticias.map(el=>{
   if(el.image && el.author != 'Evan Webeck'){
        return (
              <div className="card">
               <a href={el.url} target="_blank"> <img src={el.image} className="img"></img></a>
                <p style={{fontSize:'15px',backgroundColor:'black',height:'100px'}} key={el.title}><br/>{el.title}</p>
              </div>
          )
    }      
    })}
    </div>
  );
}
