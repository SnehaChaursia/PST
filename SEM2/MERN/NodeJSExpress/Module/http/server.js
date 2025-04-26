// const http=require('http');
// const server=http.createServer((req,res)=>{
// //     // res.end("hello sneha.")
// // res.writeHead(200, { 'Content-Type': 'text/html' });
// // res.end('<h1>Hello Sneha!</h1>');
// // })
// res.writeHead(200, { 'Content-Type': 'application/json' });
// res.end('{ "name": "Sneha" }');

// })
// const PORT=3000;
// server.listen(PORT,()=>{
//     console.log(`Server is running at http://localhost:${PORT}`);
// })

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request URL:', req.url);
  console.log('Method:', req.method);
  console.log('Headers:', req.headers);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Headers logged in console!' }));
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
