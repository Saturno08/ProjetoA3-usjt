const express = require('express');
const { connection } = require('../db/db'); 
const router = express.Router();
const { calcularNutricional } = require('../services/geminiService');


router.get('/', (req, res) => {
    const endpoint = '/';  
    const timestamp = new Date();  
    const resposta = 'Hello World!';  


    connection.query(
        'INSERT INTO dados_coresync (endpoint, data_recbida) VALUES (?, ?, ?)', 
        [endpoint, timestamp.toISOString().slice(0, 19).replace('T', ' '), resposta],
        (err, results) => {
            if (err) {
                console.error('Erro ao salvar a chamada do endpoint na base de dados:', err);
                return res.status(500).json({ message: 'Erro ao salvar a chamada do endpoint na base de dados.' });
            }

            
            return res.json({ message: 'Hello, World!' });
        }
    );
});



router.get('/consultar', async (req, res) => {
    const endpoint = '/consultar';
    const timestamp = new Date();

    try {
        
        connection.query(
            'INSERT INTO dados_coresync (endpoint, data_recbida) VALUES (?, ?)', 
            [endpoint, timestamp.toISOString().slice(0, 19).replace('T', ' ')],
            (err, results) => {
                if (err) {
                    console.error('Erro ao executar a consulta:', err);
                    return res.status(500).send('Erro ao consultar dados');
                }
                res.json({
                    message: 'Consulta realizada com sucesso!',
                    results
                });
            }
        );
    } catch (err) {
        console.error('Erro ao consultar dados:', err);
        res.status(500).send('Erro ao consultar dados');
    }
});

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

        
        const textoNutricional = resultados.candidates
            .map(candidate => candidate.content.parts.map(part => part.text).join(" "))  
            .join(" ");  

        
        const textoLimpo = textoNutricional.replace(/\n/g, " ");  

        
        const timestamp = new Date();
        const endpoint = '/calcular'; 

        
        connection.query(
            'INSERT INTO dados_coresync (endpoint, data_recbida, resposta) VALUES (?, ?, ?)', 
            [
                endpoint, 
                timestamp.toISOString().slice(0, 19).replace('T', ' '),  
                textoLimpo  
            ],
            (err, results) => {
                if (err) {
                    console.error('Erro ao salvar a resposta no banco de dados:', err);
                    return res.status(500).json({ message: 'Erro ao salvar a resposta no banco de dados.' });
                }

                
                return res.json({
                    message: 'Cálculo realizado com sucesso!',
                    textoNutricional: textoLimpo, 
                    bancoResultados: results 
                });
            }
        );
    } catch (error) {
        console.error('Erro ao calcular os dados nutricionais:', error);
        return res.status(500).json({ message: 'Erro ao calcular os dados nutricionais.' });
    }
});

module.exports = router;
