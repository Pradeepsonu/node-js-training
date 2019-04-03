const client = require('../db')

exports.getUsers = async () => {
    const result = await client.query('select * from users')
    return result.rows;
}

exports.getUsersById = async (id) => {
    const result = await client.query(`select * from users where id = ${id}`)
    return result.rows[0];
}

exports.insert = async (users) => {
    try {
        const query = 'insert into users (first_name,last_name, username, phone,email,status,designation,isdeleted) VALUES($1, $2, $3, $4, $5, $6, $7, $8) '
        const values = [users.first_name, users.last_name, users.username, users.phone, users.email, users.status, users.designation, users.isdeleted]
        await client.query(query, values)
    } catch (err) {
        console.log(err)
        throw 'Unable to insert product'
    }

}