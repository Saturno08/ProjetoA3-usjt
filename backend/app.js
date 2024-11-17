const express = require('express');
const { connectDB } = require('./db/db');  
const routes = require('./routes/index');  
const app = express();

app.use(express.json()); 


connectDB();  


app.use('/api', routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
