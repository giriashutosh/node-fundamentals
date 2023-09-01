// const http = require('http')

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Hyy, I am listening to you!!')
//     }
//     if (req.url === '/about') {
//         res.end('This is the node js fundamental')
//     }
    
//     res.end(`
//     <h1>Oops!</h1>
//     <p>we can't see the page you are looking for...</p>
//     <a href="/">Back to Home</a>
//     `)
// })

// server.listen(5000)


const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        console.log("Home Page")
        res.write("Home page")
        res.end() // End the response here for the "/" route
    } else if (req.url === '/about') {
        console.log("About page")
        res.write("About page")
        res.end() // End the response here for the "/about" route
    } else {
        console.log("Error Page")
        res.write("Error Page")
        res.end() // End the response for any other route
    }
}
)

server.listen(5000, () => {
    console.log("Server is listening to this port 5000:")
})