const mysql = require('mysql2/promise');


const pool = mysql.createPool({
    host: '',
    user: '',
    password: '', 
    database: '',
    waitForConnections: true,
    port: '',
    connectionLimit: 10000,
    queueLimit: 0
});

module.exports = pool;