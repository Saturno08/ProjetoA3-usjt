const express = require('express');
const helloWorldRoute = require('./routes/index');
const app = express();
const PORT = 3000;

// Usando a rota helloWorld
app.use('/hello-world', helloWorldRoute);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});