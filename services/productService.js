const client = require('../db')



exports.getProducts = async () => {
    const result = await client.query('select * from products')
    return result.rows;
}

exports.getProductsById = async (id) => {
    const result = await client.query(`select * from products where id = ${id}`)
    return result.rows[0];
}

exports.insert = async (userID, manufacturerID, product) => {
    try {
        const query = 'insert into products (name, code,manufacturer_id, description, created_at,created_by,price,quantity) VALUES($1, $2, $3, $4, $5, $6, $7, $8) '
        const values = [product.name, product.code, manufacturerID, product.description, new Date(), userID, product.price, product.quantity]
        await client.query(query, values)
    } catch (err) {
        console.log(err)
        throw 'Unable to insert product'
    }

}