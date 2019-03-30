const router = require('express').Router();
const authService = require('../services/authService')


router.post('/login', (req, res) => {
    try {
        const { username, password } = req.body
        authService.login(username, password)
        // console.log(req.body)
        res.json({ message: "I am authenticated" })
    } catch (err) {
        res.status(401).json({ message: err })
    }

})
module.exports = router