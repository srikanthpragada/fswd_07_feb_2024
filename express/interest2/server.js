var express = require('express');
var path = require('path');
var app = express();
var port = 8888 
 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render("interest", {interest : 0 , amount : ''})  
})
 
app.get('/interest', (req, res) => {
  let amount = req.query.amount 
  let interest = amount * 15 / 100 
  res.render("interest" , {interest : interest, amount : amount})  
})


app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`)
})  
