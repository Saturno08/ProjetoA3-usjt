import "../../assents/styles/styles.css";
import React from 'react';
import { carboidratos, proteinas, legumes, peso } from '../../arrays/arrays';

function SelectComponent() {
  return (
      <div className="ingredientes">
        <div className="select-group">
          <label htmlFor="sl_carboidratos">Carboidratos:</label>
          <select id="sl_carboidratos">
            {carboidratos.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          <label htmlFor="sl_peso_carboidratos">Peso:</label>
          <select id="sl_peso_carboidratos">
            {peso.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="select-group">
          <label htmlFor="proteinas">Proteínas:</label>
          <select id="sl_proteinas">
            {proteinas.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          <label htmlFor="pesoProteinas">Peso:</label>
          <select id="sl_peso_proteinas">
            {peso.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="select-group">
          <label htmlFor="legumes">Legumes:</label>
          <select id="sl_legumes">
            {legumes.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          <label htmlFor="pesoLegumes">Peso:</label>
          <select id="sl_peso_legumes">
            {peso.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          </div>
          <div className="select-objetivo">
          <label htmlFor="objetivo">Seu objetivo:</label>
          <select id="sl_objetivo_dieta">
            {peso.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          </div>
        

        <button id="button">Clique Aqui</button>
      </div>
  );
}

export default SelectComponent;