
import React, { useState, useEffect } from 'react';
import LogoPrincipal from '../assents/imagens/logo_principal.png'
import '../assents/styles/resposta.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function Resposta() {

  useEffect(()=>{
    const dados = localStorage.getItem("dados");
    console.log(JSON.parse(dados))
  },[])

  return (
    
    <div className="resposta">
      <header className='header-resposta'>
        <div>
          <img id="img_logo_principal" src={LogoPrincipal} alt="Logo Principal" />
        </div>
      </header>
    <div className='bodyClass'>  
      <p>Teste</p>
      </div>
    </div>
  );
}
