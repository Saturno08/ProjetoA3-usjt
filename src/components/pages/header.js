import "../../assents/styles/header.css";
import React from 'react';
import LogoPrincipal from '../../assents/imagens/logo_principal.png'
import Banner from '../../assents/imagens/plano_fundo.jpeg'
import Home from '../../components/pages/home.js'


function Header() {
    return (
      <>
        <header>
          <div>
            <img id="img_logo_principal" src={LogoPrincipal} alt="Logo Principal" />
          </div>
          <ul className="lista">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </header>
  
        <div className="banner">
          <img id="img_baner" src={Banner} alt="Banner Principal" />
          <div className="select-container">
            <Home />
          </div>
        </div>
      </>
    );
  }

  export default Header;