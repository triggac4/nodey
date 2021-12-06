const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(202).send('<h1>Home Page</h2>')
})

app.get('/about', (req, res) => {
    res.status(200).send('<h1>About page</h2>')
})

app.all('*', (req, res) => {
    res.status(404)
    res.send('<h1> request not found</h1>')
})
app.listen(9000)
