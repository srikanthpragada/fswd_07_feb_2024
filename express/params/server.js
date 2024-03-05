var express = require('express');
var app = express();
var port = 8888 

app.get('/',  
  (req, res) => {
    res.send(`<h1>Please use /wish or /greet</h1>`)
  }
)

app.get('/wish',  // URL - /wish?name=Srikanth
  (req, res) => {
     var name = req.query.name ?? 'Guest'  // query parameter 
     res.send(`<h1>Hello ${name} </h1>`)
  }
)

app.get('/greet/:name',  // URL - /greet/srikanth
  (req, res) => {
     var name = req.params.name  // route parameter 
     res.send(`<h1>Hello ${name} </h1>`)
  }
)


app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`)
})  
