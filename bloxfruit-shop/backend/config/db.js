require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool ({
    port: process.env.DB_PORT || 3306,
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'kimixer',
    database: process.env.DB_NAME || 'testdb'
});

pool.getConnection()
    .then(conn => {
        console.log(`connected to database successfully`);
        conn.release();
    })
    .catch(err => {
        console.error(`failed to connect to database`, err.message);
    });

module.exports = pool;