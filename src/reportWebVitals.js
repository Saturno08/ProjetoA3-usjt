const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;







// function App() {
//   return (
//     <div className="App">
//       <header>
//         <div>
//           <img id="img_logo_principal" src={logoPrincipal} alt="Logo Principal" />
//         </div>
//         <ul className="lista">
//           <li><a href="#">Inicio</a></li>
//           <li><a href="#">Sobre nós</a></li>
//           <li><a href="#">Serviços</a></li>
//           <li><a href="#">Contato</a></li>
//         </ul>
//       </header>

//       <div className="banner"> 
//         <img id="img_baner" src={banner} alt="Banner Principal"/>
//         <div className="select-container"> {/* Contêiner para o SelectComponent */}
//           <SelectComponent/>
//         </div>
//       </div>

//       <footer className="footer">
//         <div className="footer-content">
//           <ul className="footer-links">
//             <li><a href="#">Política de Privacidade</a></li>
//             <li><a href="#">Termos de Serviço</a></li>
//             <li><a href="#">Contato</a></li>
//           </ul>
//           <div className="social-icons">
//             <a href="#" aria-label="Facebook">
//               <FontAwesomeIcon icon={faFacebook} />
//             </a>
//             <a href="#" aria-label="Instagram">
//               <FontAwesomeIcon icon={faInstagram} />
//             </a>
//             <p>Chelf © 2024. Todos os direitos reservados.</p>
//             <p>CNPJ 85.503.537/0001-27</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }