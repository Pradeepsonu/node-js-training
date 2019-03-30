const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ message: 'I am logistics' })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(`Logistics id is ${id}`)
    res.json({ message: 'Logistics id is defined' })
})
router.get('/:id/products', (req, res) => {
    const id = req.params.id
    console.log(`Logistics id is ${id} with products`)
    res.json({ message: 'I am logistics with products' })
})
module.exports = router