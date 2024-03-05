var express = require('express');
var path = require('path');
var app = express();
var port = 8888 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 

app.get('/course',   
  (req, res) => {
      res.render("course")
  }
)

app.get('/product',
  (req, res) => {
    res.render("product",    // view name
              { title: 'iPhone 15 Pro', price: 100000 }    // data
    )
  }
)

 

app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`)
})  
