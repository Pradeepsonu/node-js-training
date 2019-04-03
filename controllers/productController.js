const router = require('express').Router();
const productService = require('../services/productService')

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4))
    res.json({ message: 'I am product' })
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const product = await productService.getProductsById(parseInt(id))
    //console.log(`Product id is ${id}`)
    res.json({ product: product })
})

router.get('/', async (req, res) => {
    const products = await productService.getProducts()
    res.header("Access-Control-Allow-Origin")
    res.json({ products: products })
})

router.post('/:userID/:manufacturerID', async (req, res) => {
    try {
        const { userID, manufacturerID } = req.params
        await productService.insert(userID, parseInt(manufacturerID), req.body)
        res.json({ message: "In product post" })
    }
    catch (err) {
        res.status(422).json({ message: err });
    }
})


module.exports = router