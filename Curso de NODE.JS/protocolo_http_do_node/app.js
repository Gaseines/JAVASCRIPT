const http = require('http')

http.createServer( (req, res) => {
    res.end("Hello World!")
}).listen(7077)

console.log('Servidor está abrerto!')