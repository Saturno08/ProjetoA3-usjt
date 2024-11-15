const express = require('express');
const router = express.Router();
const { calcularNutricional } = require('../services/geminiService');


router.post('/calcular', async (req, res) => {
    const { contents } = req.body;

    
    if (!contents || !Array.isArray(contents) || contents.length === 0) {
        return res.status(400).json({ message: 'Conteúdo inválido ou não fornecido.' });
    }

    
    const dados = {
        contents: contents.map(content => {
            if (!content.parts || !Array.isArray(content.parts)) {
                return res.status(400).json({ message: 'Formato de partes inválido.' });
            }
            return {
                parts: content.parts.map(part => ({
                    text: part.text || "" 
                }))
            };
        })
    };

    try {
        
        const resultados = await calcularNutricional(dados);
       
        return res.json(resultados);
    } catch (error) {
        console.error("Erro ao calcular os dados nutricionais:", error);
        return res.status(500).json({ message: 'Erro ao calcular os dados nutricionais.' });
    }
});

module.exports = router;
