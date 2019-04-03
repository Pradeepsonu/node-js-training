const client = require('../db')

exports.getManufacturer = async () => {
    const result = await client.query('select * from manufacturer')
    return result.rows;
}

exports.getManufacturerById = async (id) => {
    const result = await client.query(`select * from manufacturer where id =${id}`)
    return result.rows[0];
}

exports.insert = async (manufacturer) => {
    try {
        const query = 'insert into manufacturer (name,company,city,state,country,pincode) VALUES($1, $2, $3, $4, $5, $6) '
        const values = [manufacturer.name, manufacturer.company, manufacturer.city, manufacturer.state, manufacturer.country, manufacturer.pincode]
        await client.query(query, values)
    } catch (err) {
        console.log(err)
        throw 'Unable to insert product'
    }

}