var express = require('express');
var app = express();
var port = 8888 


app.get('/', (request, response) => {
  response.send('<h1>Hello Express Web Framework  4.x!</h1>')
})

 
app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`)
})  
