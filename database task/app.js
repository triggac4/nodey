const express = require('express')
const app = express()

app.use([express.static("./public"),express.json()])

const task= require('./router/task')
app.use('/api/v1/task',task)

app.all('/', (req, res) => {
    res.send('hello-world')
})

app.listen(3000, () => console.log('listening to port 3000'))
