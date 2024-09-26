import "./assents/styles/styles.css";
import React from "react";

const carboidratos = [
  "Selecione...",
  "Arroz",
  "Pão",
  "Batata",
  "Macarrão",
  "Aveia",
  "Quinoa",
  "Milho",
  "Cevada",
  "Farinha de trigo",
  "Feijão",
  "Lentilha",
  "Grão-de-bico",
  "Batata-doce",
  "Mandioca",
  "Inhame",
  "Cuscuz",
  "Ervilha",
  "Tapioca",
  "Pipoca",
  "Banana",
  "Abóbora",
  "Batata inglesa",
  "Cenoura",
  "Beterraba",
  "Taro",
  "Sorgo",
  "Farinha de milho",
  "Farinhas integrais",
  "Frutas secas (tâmaras, uvas-passas)",
  "Trigo sarraceno",
  "Arroz integral",
  "Arroz selvagem",
  "Centeio",
  "Sêmola",
  "Amido de milho",
  "Tortilhas de milho",
  "Biscoitos",
  "Croissant",
  "Granola",
  "Bolachas",
  "Polenta",
  "Purê de batatas",
  "Batata frita",
  "Chips de batata",
  "Farofa",
  "Salgadinhos de milho",
  "Pão de queijo",
  "Panquecas",
  "Waffles",
  "Donuts",
  "Bolos",
  "Muffins",
  "Pizzas",
  "Hambúrgueres (pão)",
  "Cereais matinais",
  "Nhoque",
  "Lasanha",
  "Ravioli",
  "Pastéis",
];

const proteinas = [
  "Selecione...",
  "Frango",
  "Carne bovina",
  "Carne suína",
  "Peixe (salmão, atum, tilápia)",
  "Ovos",
  "Leite",
  "Iogurte",
  "Queijo",
  "Tofu",
  "Tempeh",
  "Lentilhas",
  "Feijão",
  "Grão-de-bico",
  "Quinoa",
  "Amendoim",
  "Nozes",
  "Castanha de caju",
  "Sementes de abóbora",
  "Sementes de girassol",
  "Sementes de chia",
  "Sementes de linhaça",
  "Pasta de amendoim",
  "Proteína em pó (whey, caseína)",
  "Peito de peru",
  "Camarão",
  "Ostras",
  "Salmão defumado",
  "Carne de cordeiro",
  "Almôndegas",
  "Bife",
  "Hambúrgueres",
  "Proteína vegetal (seitan)",
  "Sopa de feijão",
  "Edamame",
  "Arroz com feijão",
  "Muffins de ovo",
  "Batidos de proteína",
  "Chili com carne",
  "Salmão grelhado",
  "Tacos de carne",
  "Frango grelhado",
  "Wraps de frango",
  "Pão de queijo (com queijo)",
  "Tortilhas de proteína",
];

const legumes = [
  "Selecione...",
  "Cenoura",
  "Brócolis",
  "Couve-flor",
  "Beterraba",
  "Abobrinha",
  "Berinjela",
  "Pimentão",
  "Espinafre",
  "Alface",
  "Rúcula",
  "Acelga",
  "Repolho",
  "Cebola",
  "Alho",
  "Batata",
  "Batata-doce",
  "Pepino",
  "Tomate",
  "Ervilha",
  "Vagem",
  "Nabo",
  "Rabanete",
  "Aspargo",
  "Milho",
  "Couve-de-bruxelas",
  "Salsa",
  "Coentro",
  "Petróleo",
  "Cebolinha",
  "Almeirão",
  "Dente de leão",
  "Abóbora",
  "Jiló",
  "Pimenta",
  "Beringela",
  "Aipo",
  "Funcho",
  "Nabo",
  "Mandioca",
  "Chuchu",
  "Quiabo",
  "Taro",
  "Alface romana",
  "Escarola",
  "Frécula",
];

const peso = [
  "Selecione...",
  "100g",
  "200g",
  "300g",
  "400g",
  "500g",
  "600g",
  "700g",
  "800g",
  "900g",
  "1Kg",
];

function App() {
  return (
    <div className="App">
      <div className="ingredientes">
        {/* Primeiro conjunto de selects */}
        <div className="select-group">
          <label htmlFor="carboidratos">Carboidratos:</label>
          <select id="carboidratos">
            {carboidratos.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          
          <label htmlFor="pesoCarboidratos">Peso:</label>
          <select id="pesoCarboidratos">
            {peso.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="select-group">
          <label htmlFor="proteinas">Proteínas:</label>
          <select id="proteinas">
            {proteinas.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          
          <label htmlFor="pesoProteinas">Peso:</label>
          <select id="pesoProteinas">
            {peso.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="select-group">
          <label htmlFor="legumes">Legumes:</label>
          <select id="legumes">
            {legumes.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          
          <label htmlFor="pesoLegumes">Peso:</label>
          <select id="pesoLegumes">
            {peso.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button id="button">Clique Aqui</button>
      </div>
    </div>
  );
}

export default App;
