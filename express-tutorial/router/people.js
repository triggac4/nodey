const express = require('express')
const router = express.Router()

const { people, products } = require('../data')

router.post('/', (req, res) => {
    const { name } = req.body
    if (name.trim()) {
        res.status(200).json({ success: true, person: name })
        return
    } else {
        res.status(401).json({ success: false, msg: 'please input a name' })
    }
})
router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const index = people.findIndex((p) => p.id == id)
    if (index >= 0 && name) {
        people.splice(index, 1, { id, name })
        res.json({ success: true, data: [...people] })
        return
    }
    res.status(404).json({
        success: false,
        data: 'please check if user exists or name is empty',
    })
})
router.delete('/:id', (req, res) => {
    const { id } = req.params

    const index = people.findIndex((p) => p.id == id)
    if (index >= 0) {
        people.splice(index, 1)
        res.json({ success: true, data: [...people] })
        return
    }
    res.status(404).json({
        success: false,
        data: 'please check if user exists or name is empty',
    })
})

module.exports = router
