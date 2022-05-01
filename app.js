const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url == '/home') {

    }
    // console.log(req);
    // process.exit();
});

server.listen(3000, "localhost");