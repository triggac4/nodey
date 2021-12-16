const express = require('express')
const app = express()

app.use([express.static("./public"),express.json()])

//database connection
require('dotenv').config()
const connectDB =require('./db/connect')

//task router
const task= require('./router/task')
app.use('/api/v1/task',task)

app.all('/', (req, res) => {
    res.send('hello-world')
})
const start=async ()=>{

    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(3000, () => console.log('listening to port 3000'))
    }
    catch(err){
        console.log(err)
    }

}
start()
