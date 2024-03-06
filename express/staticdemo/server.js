var express = require('express');
var path = require('path');
var app = express();
var port = 8888



app.use(express.static('public'))   // static files are in public folder 
//app.use('/static', express.static('public'))   // static files are in public folder 
//app.use('/static', express.static(path.join(__dirname, 'public')))   // static files are in public folder 


app.get('/', (req, res) => {
  res.send("<h1>Static Files Demo <h1>")
})


app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`)
})  
