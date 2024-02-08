// usersRoutes.js
const express = require('express');
const router = express.Router();
const pool = require('../db'); // Importe o pool do banco de dados

// Rota para verificar se o email já está cadastrado
router.get('/checkEmail', async (req, res) => {
    const { email } = req.query;
    console.log(email);
    try {
        const result = await pool.query('SELECT * FROM usuario WHERE email = $1', [email]);
        if (result.rows.length > 0) {
            // Email já cadastrado
            res.status(400).send('Email já cadastrado.');
        } else {
            // Email não cadastrado
            res.sendStatus(200);
        }
    } catch (error) {
        console.error('Erro ao verificar o email:', error);
        res.status(500).send('Erro ao verificar o email.');
    }
});

module.exports = router;
