const { Pool } = require('pg')();

const pool = new Pool({
    user: 'tjlopes',
    host: 'localhost',
    database: 'cloneSpotify2',
    password: 'tjlopes',
    port: 5432,
});

console.log('Conectando ao banco de dados...');


pool.on('error', (err) => {
    console.log('Erro ao conectar ao banco de dados:', err);
});

module.exports = pool;
