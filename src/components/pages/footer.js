import "../../assents/styles/footer.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <ul className="footer-links">
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Termos de Serviço</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <p>Chelf © 2024. Todos os direitos reservados.</p>
            <p>CNPJ 85.503.537/0001-27</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
