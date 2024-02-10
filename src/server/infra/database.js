const pgp = require('pg-promise')();
const db = pgp({
    user: 'tjlopes',
    host: 'localhost',
    database: 'cloneSpotify2',
    password: 'tjlopes',
    port: 5432,
});

module.exports = db;