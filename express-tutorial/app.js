const express = require('express')
const morgan = require('morgan')

const app = express()

const { logger, otherRoute } = require('./logger')
app.use([logger, morgan('tiny')])
app.use([
    express.static('./methods-public'),
    express.urlencoded({ extended: true }),
])

app.post('/login', (req, res) => {
    console.log(req.body)

    res.send(`hello ${req.body.name}`)
})

app.listen(9000)
