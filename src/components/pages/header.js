import "../../assents/styles/header.css";
import React from 'react';
import LogoPrincipal from '../../assents/imagens/logo_principal.png'

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
  
        
      </>
    );
  }

  export default Header;