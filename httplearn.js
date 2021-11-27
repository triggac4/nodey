const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/') {
        res.end('this is the home page')
    } else if (req.url === '/about') {
        res.end('this is the about page ')
    } else {
        res.end(
            `
        <h1>Error</h1>
        <p>ps couldn't find page  <a href='/'>return home</a></p>
                `
        )
    }
})

server.listen(9000)
