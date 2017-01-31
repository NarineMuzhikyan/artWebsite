const http = require('http');
const url =require('url');
const server = new http.Server();
server.listen(1337, '127.0.0.1');
/*server.on('request', function (req, res) {
    res.end('Hello world');
});*/
var counter = 0;
server.on('request', (req, res)=>{
    const urlParsed = url.parse(req.url, true);
    console.log(urlParsed);
    res.end('Hello world');
})
console.log('server running in 127.0.0.1');