var path = require('path');
var express = require('express');
var { pool } = require("./database_pool")

const port = 8888
var app = express();

app.use(express.static('views'))

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/depts', (req, res) => {
  var query = pool.query("select * from departments",
    function (err, departments) {
      if (err) throw err;
      res.render('listdept', { departments: departments })
    }
  );
})


app.get('/add', (req, res) => {
  res.render('adddept')
})

app.post('/add', (req, res) => {
  var query = pool.query("insert into departments values(?,?)", [req.body.deptid, req.body.deptname],
    function (err, result) { 
      if (err)  
        res.send(`<h1>Error while adding department. Error : ${err.sqlMessage}`)
      else
        res.send(`<h1>Added Department ${req.body.deptname} Successfully!!`)
    }
  );
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

