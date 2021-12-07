const express = require('express')
const morgan = require('morgan')
const app = express()

const { logger, otherRoute } = require('./logger')

app.use([logger, morgan('tiny')])
app.use('/api', otherRoute)

app.get('/', (req, res) => {
    res.send('HOME')
})
app.get('/about', (req, res) => {
    res.send('About')
})
app.get('/api/example1', (req, res) => {
    res.send('example1')
})
app.get('/api/example2', (req, res) => {
    res.send('example2')
})
app.listen(9000)
