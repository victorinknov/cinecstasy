const mysql = require('mysql'),
    { promisify } = require('util'),
    { database } = require('./keys'),
    pool = mysql.createPool(database)

// Catch if there's connection or error
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Connection with database was closed. Please, reconnect.')
        }
        if (err.code === 'ERR_CON_COUNT_ERROR') {
            console.error('Database has too many connections. Please, try again later.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Your connection was refused. Access Forbidden.')
        }
    }
    if (connection) {
        connection.release()
        console.log('Database CONNECTED.')
        return
    }
})

pool.query = promisify(pool.query)

module.exports = pool