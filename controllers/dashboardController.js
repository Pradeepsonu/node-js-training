const router = require('express').Router();
router.get('/', (req, res) => {
    res.json({ message: 'I am dashboard' })
})
module.exports = router