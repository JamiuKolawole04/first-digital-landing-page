// the http module required for  starting the server
const http = require('http');
// the fs module for working with files
const { readFileSync } = require('fs');
// reading files on the server
const indexPage = readFileSync('index.html');
const stylesPage = readFileSync('digital.css');
const img_One = readFileSync('./img/asset-service.png');
const img_Two = readFileSync('./img/custody.png');
const img_Three = readFileSync('./img/demo.png');
const img_Four = readFileSync('./img/finance.png');
const img_Five = readFileSync('./img/first_logo.png');
const img_Six = readFileSync('./img/fold.png');
const img_Seven = readFileSync('./img/funds.png');
const img_Eight = readFileSync('./img/girl1.png');
const img_Nine = readFileSync('./img/girl2.png');
const img_Ten = readFileSync('./img/individuals.png');
const img_Eleven = readFileSync('./img/institutions.png');
const img_Twelve = readFileSync('./img/last_logo.png');
const img_Thirteen = readFileSync('./img/photography.jpeg');
const img_Fourteen = readFileSync('./img/plus.png');
const img_Fifteen = readFileSync('./img/service.png');
const img_Sixteen = readFileSync('./img/specialists.png');
const img_Seventeen = readFileSync('./img/token-issuers.png');
const img_Eighteen = readFileSync('./img/tokenization.png');
const img_Nineteen = readFileSync('./img/trading-platform.png');
const img_Twenty = readFileSync('./img/transfer-details.png');

// server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    const url = req.url;
    //Home page
    if (url === '/') {
        res.write(indexPage);
        res.end();
    }
    // Style file
    else if (url === '/digital.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(stylesPage);
        res.end();
    }
    // images rendering
    else if (url === '/img/asset-service.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_One)
        res.end()
    }
    else if (url === '/img/custody.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Two)
        res.end()
    }
    else if (url === '/img/demo.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Three)
        res.end()
    }
    else if (url === '/img/finance.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Four)
        res.end()
    }
    else if (url === '/img/first_logo.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Five)
        res.end()
    }
    else if (url === '/img/fold.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Six)
        res.end()
    }
    else if (url === '/img/funds.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Seven)
        res.end()
    }
    else if (url === '/img/girl1.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Eight)
        res.end()
    }
    else if (url === '/img/girl2.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Nine)
        res.end()
    }
    else if (url === '/img/individuals.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Ten)
        res.end()
    }
    else if (url === '/img/institutions.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Eleven)
        res.end()
    }
    else if (url === '/img/last_logo.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Twelve)
        res.end()
    }
    else if (url === '/img/photography.jpeg') {
        res.writeHead(200, { 'content-type': 'image/jpeg+xml' })
        res.write(img_Thirteen)
        res.end()
    }
    else if (url === '/img/plus.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Fourteen)
        res.end()
    }
    else if (url === '/img/service.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Fifteen)
        res.end()
    }
    else if (url === '/img/specialists.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Sixteen)
        res.end()
    }
    else if (url === '/img/token-issuers.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Seventeen)
        res.end()
    }
    else if (url === '/img/tokenization.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Eighteen)
        res.end()
    }
    else if (url === '/img/trading-platform.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Nineteen)
        res.end()
    }
    else if (url === '/img/transfer-details.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(img_Twenty)
        res.end()
    }

    // error or 404
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write(`<h1>Oops! page can't be found</h1>
         <a href="/">home page</a>
        `)
        res.end();
    }
})

// server starting on port 2000
server.listen(2000, () => {
    console.log(`Server on port 2000`);
})