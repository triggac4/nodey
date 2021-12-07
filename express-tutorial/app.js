const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
    res.send("<h2>welcome home <a href='/product'>products</a></h2>")
})
app.get('/product', (req, res) => {
    const { search, limit } = req.query
    let result = [...products]
    if (search) {
        result = products.filter((prod) => {
            return !(prod.name.indexOf(search) < 0)
        })
    }
    if (limit) {
        result = result.slice(0, Number(limit))
        console.log(result)
    }
    res.status(200).json({ success: true, data: result })
})

app.get('/product/:prodId', (req, res) => {
    const { prodId } = req.params
    let result = products.find((a) => a.id === Number(prodId))
    if (result) {
        res.status(204).json(result)
    } else {
        res.status(404).send('product id does not exist')
    }
})

app.all('*', (req, res) => {
    res.status(404).send('unknown')
})
app.listen(9000)
