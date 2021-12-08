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
    let { name } = req.body
    if (name) {
        res.send(`hello ${req.body.name}`)
    } else {
        res.send('please insert a name')
    }
})

app.listen(9000)
