const router = require('express').Router();
const userService = require('../services/userService')

// router.post('/', (req, res) => {
//     console.log(JSON.stringify(req.body, undefined, 5))
//     console.log("I am user")
// })
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const user = await userService.getUsersById(parseInt(id))
    //console.log(`User id is ${id}`);
    res.json({ user: user })
})

router.get('/', async (req, res) => {
    const users = await userService.getUsers()
    // res.header("Access-Control-Allow-Origin")
    res.json({ users: users })
})

router.post('/', async (req, res) => {
    try {
        await userService.insert(req.body)
        res.json({ message: "In product post" })
    }
    catch (err) {
        res.status(422).json({ message: err });
    }
})
module.exports = router