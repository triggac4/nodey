const express = require('express')
const router = express.Router()
const People = require('../controller/people')

router.put('/:id', People.editPerson)
router.delete('/:id', People.deletePerson)

router.route('/').post(People.createPerson).get(People.getPerson)
module.exports = router
