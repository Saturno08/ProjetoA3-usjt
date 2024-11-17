const express = require('express');
const axios = require('axios');
const db = require('../db/db');
require('dotenv').config();  

const router = express.Router();


function extractCalories(text) {
  const caloriasRegex = /calorias.*\s*(\d+)\s*(kcal|cal)/i;
  const match = text.match(caloriasRegex);
  
  if (match) {
    return match[1];
  }
  
  
  if (text.includes('ganho de massa')) {
    return 2500; 
  }
  
  return null; 
}


function extractMacronutrients(text) {
  const macronutrientes = {};


  const proteinasRegex = /proteínas[^:]*[:\s]*(\d+)\s*(g|gramas)/i;
  const proteinasMatch = text.match(proteinasRegex);
  if (proteinasMatch) macronutrientes.proteinas = proteinasMatch[1];


  const carboidratosRegex = /carboidratos[^:]*[:\s]*(\d+)\s*(g|gramas)/i;
  const carboidratosMatch = text.match(carboidratosRegex);
  if (carboidratosMatch) macronutrientes.carboidratos = carboidratosMatch[1];

  
  const gordurasRegex = /gorduras[^:]*[:\s]*(\d+)\s*(g|gramas)/i;
  const gordurasMatch = text.match(gordurasRegex);
  if (gordurasMatch) macronutrientes.gorduras = gordurasMatch[1];

  
  if (Object.keys(macronutrientes).length === 0) {
    if (text.includes('ganho de massa')) {
      macronutrientes.proteinas = 150; 
      macronutrientes.carboidratos = 300;
      macronutrientes.gorduras = 80;
    }
  }

  return macronutrientes;
}


function generateRecommendations(objetivo) {
  let recommendations = {
    dieta: [],
    treinamento: [],
    outros: []
  };

  if (objetivo === 'Ganho de massa') {
    recommendations.dieta.push('Aumentar o consumo calórico para promover o ganho de massa muscular.');
    recommendations.dieta.push('Consumir cerca de 1,6-2,2 gramas de proteína por quilo de peso corporal por dia.');
    recommendations.dieta.push('Priorizar carboidratos complexos como arroz integral, batata doce e pão integral.');
    recommendations.dieta.push('Consumir gorduras saudáveis como azeite de oliva, abacate e oleaginosas.');

    recommendations.treinamento.push('Priorizar exercícios compostos como agachamento, supino e levantamento terra.');
    recommendations.treinamento.push('Treinar com pesos desafiadores e número de repetições que possibilitem alcançar a fadiga muscular.');
    recommendations.treinamento.push('Treinar 3-4 vezes por semana, com pelo menos um dia de descanso entre as sessões.');

    recommendations.outros.push('Dormir pelo menos 7-8 horas por noite para permitir a recuperação muscular.');
    recommendations.outros.push('Beber bastante água ao longo do dia, especialmente após os treinos.');
    recommendations.outros.push('A suplementação de proteínas, como whey protein, pode ser útil, mas não essencial para todos.');
  }

  

  return recommendations;
}


router.post('/calculo-nutricional', async (req, res) => {
  console.log('Dados recebidos:', req.body);  

  const { peso, altura, objetivo, proteinas, carboidratos, legumes,quantidadeCabroidatos,quantidadeProteinas,quantidadeLegumes } = req.body;

 
  if (!peso || !altura  || !objetivo  || !proteinas || !carboidratos || !legumes) {
    return res.status(400).json({ error: 'Todos os dados são obrigatórios' });
  }

  const { GEMINI_API_KEY: apiKey, GEMINI_API_URL: endpointGemini } = process.env;

  if (!apiKey || !endpointGemini) {
    return res.status(500).json({ error: 'Chave de API Gemini ou endpoint não configurado' });
  }

  try {
    
    const dadosNutricionais = {
      peso,
      altura,
      objetivo,
      proteinas,
      carboidratos,
      legumes,
      quantidadeCabroidatos,
      quantidadeProteinas,
      quantidadeLegumes
    };

   
    const response = await axios.post(
      `${endpointGemini}?key=${apiKey}`,  
      { contents: [{ parts: [{ text: JSON.stringify(dadosNutricionais) }] }] }, 
      { headers: { 'Content-Type': 'application/json' } }
    );

    console.log('Resposta completa da API Gemini:', JSON.stringify(response.data, null, 2));

    
    const geminiData = response.data;

    
    if (geminiData.candidates && geminiData.candidates.length > 0) {
      const analysisText = geminiData.candidates[0].content.parts[0].text;

  
      const linhas = analysisText.split('\n');

      const recomendacoes = linhas.filter(linha => /^\d+\.\s/.test(linha));
      
      const textoRecomendado = linhas.map(text => {
        const textoLimpo = text.replace(/^\d+\.\s/, '');
      
        if (textoLimpo.trim() !== '' || textoLimpo.trim() != null || textoLimpo.trim() != undefined ) {
          return {
            texto: textoLimpo
          };
        }
      });
  

      if (analysisText) {
        return res.json({
         text: textoRecomendado,
        recomendacoes: recomendacoes
        });
      } else {
        return res.status(500).json({ error: 'Não foi possível extrair dados nutricionais completos, valores aproximados podem ser fornecidos.' });
      }
    } else {
      return res.status(500).json({ error: 'Resposta incompleta da API Gemini' });
    }

  } catch (err) {
    console.error('Erro ao se comunicar com a API Gemini:', err);
    const status = err.response?.status || 500;
    const message = err.response?.data || 'Erro ao se comunicar com a API Gemini';
    res.status(status).json({ error: message });
  }
});

module.exports = router;
