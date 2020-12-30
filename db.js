async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection('mysql://root:@localhost:3306/crud')
    console.log('conectou')
    global.connection = connection

    return connection;
}
// connect()

async function selectCustoners() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM clients;')
    
    return rows
}

async function insertCustomer(customer) {
    const conn = await connect();
    const sql = 'INSERT INTO clients (name, yearOld, uf) VALUES (?,?,?);'
    const values = [customer.name, customer.yearOld, customer.uf]
    await conn.query(sql, values)
}

async function updateCustomer(id, customer) {
    const conn = await connect();

    const sql = 'UPDATE clients SET name=?, yearOld =?, uf=? WHERE id = ?'
    const values = [customer.name, customer.yearOld, customer.uf, id]
    await conn.query(sql, values)

}

async function deleteCustomer(id) {
    const conn = await connect();
    const sql = 'DELETE FROM clients WHERE id = ?'
    await conn.query(sql, [id])
}

module.exports = {selectCustoners, insertCustomer, updateCustomer, deleteCustomer}