const http = require('http');
const url = require('url');
const fs = require('fs');

// Create a server object
const server = http.createServer((req, res) => {
  if(req.url === '/json') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({id: 1, name: 'John Doe', salary: 3000}));
    res.end();
  } else if(req.url === '/html') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<p>Home Page</p>');
    res.end();
  } else if(req.url === '/users') {
    const data = fs.readFileSync('./users.json');
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(data);
    res.end()
  } else if(req.url === '/createfile') {
    const data = fs.writeFile('./customfile.txt', (err) => {
      if(err) {
        console.log(err);
        res.end()
      }
      console.log('file created');
      res.end()
    })
  } else {
    const parsedURL = url.parse(req.url, true);
    console.log(parsedURL.query);
    res.end('empty');
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
