const http = require('http')
const fs = require('fs')

const htmlResources = fs.readFileSync(
    './express-tutorial/navbar-app/index.html',
    'utf8'
)
const cssResources = fs.readFileSync(
    './express-tutorial//navbar-app/styles.css',
    'utf8'
)
const jsResources = fs.readFileSync(
    './express-tutorial//navbar-app/browser-app.js',
    'utf8'
)
const imageResources = fs.readFileSync(
    './express-tutorial//navbar-app/logo.svg',
    'utf8'
)

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(htmlResources)
        res.end()
    } else if (req.url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(jsResources)
        res.end()
    } else if (req.url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(imageResources)
        res.end()
    } else if (req.url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(cssResources)
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
