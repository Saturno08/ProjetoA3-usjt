const express = require('express');
const router = express.Router();

// Definindo o endpoint GET /hello-world
router.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

module.exports = router;