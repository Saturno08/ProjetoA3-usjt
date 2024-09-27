import "./assents/styles/global.css";
import React from 'react';
import logoPrincipal from './assents/imagens/logo_principal.png'
import banner from './assents/imagens/plano_fundo.jpeg'

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <img id="img_logo_principal"src={logoPrincipal} alt="Logo Principal" />
        </div>
        <ul className="lista">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </header>
      <body>
        <div className="banner"> 
      <img id="img_baner"src={banner} alt="Logo Principal"/>
      </div>
      </body>
    </div>
  );
}



export default App;