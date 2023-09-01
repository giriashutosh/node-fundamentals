const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hyy, I am listening to you!!')
    }
    if (req.url === '/about') {
        res.end('This is the node js fundamental')
    }
    
    res.end(`
    <h1>Oops!</h1>
    <p>we can't see the page you are looking for...</p>
    <a href="/">Back to Home</a>
    `)
})

server.listen(5000)