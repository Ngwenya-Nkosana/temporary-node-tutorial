const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oopsie Daisie</h1>
    <p>We cannot seem to find the page</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)