const express = require('express')

const router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body)
    let { name } = req.body
    if (name) {
        res.json({ greeting: `hello ${req.body.name}` })
    } else {
        res.send('please insert a name')
    }
})

module.exports = router
