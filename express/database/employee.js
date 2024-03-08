
var path = require('path');
var express = require('express');
var con = require("./database")

const port = 8888
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/search', (req, res) => {
     if(req.query.name) {  // search for employees
         var query = con.query
         ("select * from employees where fullname like ?", 
          [`%${req.query.name}%`],
          function (err, employees) {
            if (err) throw err;
            res.render('search', { employees : employees,
                                   name : req.query.name})
          }
         )
     }// if
     else  // first request without name 
       res.render("search", {employees : [], name : ''})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

