import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Layout";
import { About } from "./routes/About";
import { Home } from "./routes/Home";
import { Consulta } from "./routes/Consulta";
import { Consultas } from "./routes/Consultas";
import './css/style.css';
import { Noticias } from "./routes/Noticias";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
      <Route path="/" element={<Layout />}>
        
        <Route path="consultas" element={<Consultas />}/>
     
          <Route path="Uno" element={<Consulta />} />
       
        <Route path="about" element={<About />} />
        <Route path="noticias" element={<Noticias />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
