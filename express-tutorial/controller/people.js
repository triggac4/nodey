const { people } = require('../data')
class People {
    static createPerson(req, res) {
        const { id, name } = req.body
        people.push({ id, name })
        if (name.trim()) {
            res.status(200).json({ success: true, person: people })
            return
        } else {
            res.status(401).json({ success: false, msg: 'please input a name' })
        }
    }
    static getPerson(req, res) {
        res.status(200).json({ success: true, data: people })
    }
    static editPerson(req, res) {
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
    }
    static deletePerson(req, res) {
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
    }
}

module.exports = People
