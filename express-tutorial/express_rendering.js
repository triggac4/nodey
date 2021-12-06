const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('./public'))

app.get('*', (req, res) => {
    res.status(404).send('check')
})
app.listen(3000)
