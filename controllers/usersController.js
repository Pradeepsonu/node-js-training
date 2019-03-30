const router = require('express').Router();
const userService = require('../services/userService')

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 5))
    console.log("I am user")
})
router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(`User id is ${id}`);
    res.json({ message: 'User id is defined' })
})

router.get('/', (req, res) => {
    const users = userService.getUsers()
    res.header("Access-Control-Allow-Origin")
    res.json({ pradeep: users })
})
module.exports = router