// app.js
const express = require('express');
const app = express();

// Importa as rotas de usuários
const usersRoutes = require('./routes/usersRoutes');

// Define o uso das rotas de usuários
app.use('/users', usersRoutes);

// Inicia o servidor
app.listen(3001, () => {
    console.log('Servidor está ouvindo na porta 3001');
});