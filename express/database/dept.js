
var path = require('path');
var express = require('express');
var con = require("./database")

const port = 8888
var app = express();

app.use(express.static('views'))   // static file configuration

// Form body parser configuration 
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/list', (req, res) => {
  var query = con.query("select * from departments",
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
  var query = con.query("insert into departments values(?,?)",
    [req.body.deptid, req.body.deptname],
    function (err, result) {
      if (err) {
        res.send(`<h2>Sorry!! Could not add department.</h2><h3>Error :  ${err.message} </h3>`)
      }
      else
        res.send(`<h1>Added Department [${req.body.deptname}] Successfully!! </h1><a href='/list'>List Departments</a>`)
    }
  );
})

app.get('/delete', (req, res) => {
  var query = con.query(
    "delete from departments where dept_id = ?",
    [req.query.id],
    function (err, result) {
      if (err) throw err;

      if (result.affectedRows > 0) {
        res.redirect("/list")
      }
      else
        res.end('<h1>Sorry! Department Id Not Found!</h1>')
    }
  );
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

