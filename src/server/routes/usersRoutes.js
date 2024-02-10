// usersRoutes.js
const express = require('express');
const router = express.Router();
const pool = require('../infra/database'); // pool do banco de dadoss


// Rota para verificar se o email já está cadastrado
router.get('/checkEmail', async (req, res) => {
    
    const { email } = req.query;
    
    try {
        const result = await pool.query('SELECT * FROM usuario WHERE email = $1', [email]);
        if(result.length > 0) {
            // Email já cadastrado
            res.status(400).send('Email já cadastrado.');
        } else {
            console.log('Email não cadastrado')
            res.sendStatus(200);
        }
       
    } catch (error) {
        console.error('Erro ao verificar o email:', error);
        res.status(500).send('Erro ao verificar o email.');
    }
});

router.post('/insertUser', async (req, res) => {
    const { email, senha, nome, dataNascimento, genero } = req.body;

    try {
      await pool.query('INSERT INTO usuario VALUES ($1, $2, $3, $4, $5)', [email, senha, nome, dataNascimento, genero]);
      res.status(200).send('Usuário cadastrado com sucesso');
    } catch (error) {
      console.error('Erro ao inserir o usuário:', error);
      res.status(500).send('Erro ao inserir o usuário');
    }
  });
  

module.exports = router;
