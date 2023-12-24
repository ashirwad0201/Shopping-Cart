const mysql=require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'node-complete',
    password : '02011999'
})

module.exports = pool.promise();