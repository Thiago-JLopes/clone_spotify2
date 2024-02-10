const express = require('express');
const bodyParser = require('body-parser'); // Importe o body-parser
const app = express();

// Adicione o middleware do CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Use o body-parser para analisar corpos de requisição JSON
app.use(bodyParser.json());

// Define o uso das rotas de usuários
app.use('/users', require('./routes/usersRoutes'));

// Inicia o servidor
app.listen(3002, () => {
    console.log('Servidor está ouvindo na porta 3002');
});
