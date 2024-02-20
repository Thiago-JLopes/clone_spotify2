// app.js
const express = require('express');
const app = express();



// Define o uso das rotas de usuários
app.use('/users', require('./routes/usersRoutes'));

