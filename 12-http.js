const http = require('http');
const server = http.createServer((req,res) => {
//console.log(req);
if(req.url === '/'){
res.end('welcome to our home page')
}
if(req.url === '/about'){
res.end('here is our short history')
}
res.end(`
<h1> Opps! </h1>
<p>We can't seems to find the page you are looking for</p>
<a href= "/">Back Home</a>
`)
})

server.listen(5000)