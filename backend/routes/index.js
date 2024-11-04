const express = require('express');
const router = express.Router();
const db = require('../db/db');

// Definindo o endpoint GET /hello-world
router.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

router.get('/consultar', async (req, res) => {
    const endpoint = '/consultar';
    const timestamp = new Date();

    try {
        await db.query('INSERT INTO dados_coresync (endpoint, data_recbida) VALUES (?, ?)', [
            endpoint,
            timestamp.toISOString().slice(0, 19).replace('T', ' ') 
        ]);

        
        res.json({
            message: 'Consulta realizada com sucesso!',
        });
    } catch (err) {
        console.error('Erro ao consultar dados:', err);
        res.status(500).send('Erro ao consultar dados');
    }
});

module.exports = router;