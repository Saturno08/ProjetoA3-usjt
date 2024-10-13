
import React from 'react';
import LogoPrincipal from '../assents/imagens/logo_principal.png'
import '../assents/styles/resposta.css'

function Resposta() {
  return (
    <div className="resposta">
      <header className = 'header-resposta'>
        <div>
          <img id="img_logo_principal" src={LogoPrincipal} alt="Logo Principal" />
        </div>
      </header>
    </div>
  );
}


export default Resposta;