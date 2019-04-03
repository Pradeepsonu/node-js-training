const router = require('express').Router();
const manufacturerService = require('../services/manufacturerService')

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const manufacturer = await manufacturerService.getManufacturerById(parseInt(id))
    //console.log(`Product id is ${id}`)
    res.json({ manufacturer: manufacturer })
})

router.get('/', async (req, res) => {
    const manufacturer = await manufacturerService.getManufacturer()
    res.header("Access-Control-Allow-Origin")
    res.json({ manufacturer: manufacturer })
})

router.post('/', async (req, res) => {
    try {
        await manufacturerService.insert(req.body)
        res.json({ message: "In product post" })
    }
    catch (err) {
        res.status(422).json({ message: err });
    }
})

module.exports = router