import "../../assents/styles/ingredientes.css";
import "../../assents/styles/global.css";

import React, { useState } from "react";
import { carboidratos, proteinas, legumes, peso, objetivo } from "../../arrays/arrays.js";
import Banner from '../../assents/imagens/plano_fundo.jpeg';
import { useNavigate } from "react-router-dom";
import Header from "./header.js";
import Footer from "./footer.js";

function Home() {
  const navigate = useNavigate();

  function goToTeste() {
    navigate('/response');
  }

  return (
    <>
      <Header />
      <div className="banner">
        <img id="img_baner" src={Banner} alt="Banner Principal" />
        <div className="select-container">
          <div className="ingredientes">
            <div className="titulo">
              <label htmlFor="lb_faca_calculo">Faça o cálculo nutricional da sua refeição</label>
            </div>
            <div className="select-group">
              <label htmlFor="sl_carboidratos">Carboidratos:</label>
              <select id="sl_carboidratos">
                {carboidratos.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <label htmlFor="sl_peso_carboidratos">Quantidade</label>
              <select id="sl_peso_carboidratos">
                {peso.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="select-group">
              <label htmlFor="sl_proteinas">Proteínas:</label>
              <select id="sl_proteinas">
                {proteinas.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <label htmlFor="sl_peso_proteinas">Quantidade</label>
              <select id="sl_peso_proteinas">
                {peso.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="select-group">
              <label htmlFor="sl_legumes">Legumes:</label>
              <select id="sl_legumes">
                {legumes.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <label htmlFor="sl_peso_legumes">Quantidade</label>
              <select id="sl_peso_legumes">
                {peso.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-usuario">
              <label htmlFor="sl_peso_usuario">Seu Peso:</label>
              <input id="sl_peso_usuario" />
              <label htmlFor="sl_altura_usuario">Sua Altura:</label>
              <input id="sl_altura_usuario" />
            </div>

            <div className="select-objetivo">
              <label htmlFor="sl_objetivo_dieta">Seu objetivo:</label>
              <select id="sl_objetivo_dieta">
                {objetivo.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <button id="button" onClick={goToTeste}>Clique Aqui</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
