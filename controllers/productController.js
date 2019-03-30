const router = require('express').Router();
const productService = require('../services/productService')

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4))
    res.json({ message: 'I am product' })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(`Product id is ${id}`)
    res.json({ message: 'Product id is defined' })
})

router.get('/', (req, res) => {
    const products = productService.getProducts()
    res.header("Access-Control-Allow-Origin")
    res.json({ products: products })
})
module.exports = router