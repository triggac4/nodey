const express = require('express')
const app = express()

const people = require('./router/people')
const auth = require('./router/auth')

app.use(express.static('./methods-public'))
app.use('/api/people', [express.json(), people])
app.use('/login', [express.urlencoded({ extended: true }), auth])
app.listen(9000)
