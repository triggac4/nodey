const http = require('http')
const fs = require('fs')

const htmlResources = fs.readFileSync('./navbar-app/index.html', 'utf8')

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(htmlResources)
        res.end()
    } else {
        res.writeHead(404, 'resource not found', {
            'content-type': 'text/html',
        })
        res.write('<h1>404 server error</h1>')
        res.end()
    }
}).listen(8000, () => {
    console.log('started')
})
