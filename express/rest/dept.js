
// REST API

var express = require('express');
var con = require("./database")

const port = 8888
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

// Get all departments 
app.get('/departments', (req, res) => {
  var query = con.query("select * from departments",
    function (err, departments) {
      if (err) {
        res.status(500).send(err.message);
      }
      res.json(departments)
    }
  );
})

// Get all departments by the given name 
app.get('/departments/search', (req, res) => {
  var query = con.query("select * from departments where dept_name like ?",
    ['%' + req.query.name + '%'],
    function (err, departments) {
      if (err) {
        res.status(500).send(err.message);
      }
      res.json(departments)
    }
  );
})

// Get one department by the given id 
app.get('/departments/:id', (req, res) => {
  var query = con.query("select * from departments where dept_id = ?",
    [req.params.id],
    function (err, departments) {
      if (err) {
        res.status(500).send(err.message);
      }
      if (departments.length > 0)
        res.json(departments[0])
      else
        res.status(404).send('Department Id Not Found!')
    }
  );
})

// Add new department for POST request 
app.post('/departments', (req, res) => {
  if (!req.body.id || !req.body.name) {
    res.status(400).send("Invalid Data!");
    return
  }
  var query = con.query("insert into departments values(?,?)",
    [req.body.id, req.body.name],  // body of JSON type 
    function (err, result) {
      if (err) {
        res.status(500).send(err.message);
      }
      else
        res.status(201).send(req.body)
    }
  );
})

// Delete department by id for DELETE request 
app.delete('/departments/:id',
  (req, res) => {
    var query = con.query("delete from departments where dept_id = ?",
      [req.params.id],
      function (err, result) {
        if (err)
          res.status(500).send(err.message);
        else
          if (result.affectedRows > 0)
            res.status(204).send("Deleted Successfully!")
          else
            res.status(404).send("Department Id Not Found!")
      }
    );
  })

// Update department by the given id and with given name using PUT request 
app.put('/departments/:id',
  (req, res) => {
    if (!req.body.name) {
      res.status(400).send("Invalid Data!");
      return
    }

    var query = con.query("update departments set dept_name = ? where dept_id = ?",
      [req.body.name, req.params.id],
      function (err, result) {
        if (err)
          res.status(500).send(err.message);
        else
          if (result.affectedRows > 0)
            res.status(200).send("Updated Successfully!")
          else
            res.status(404).send("Department Id Not Found!")
      }
    );
  })

app.listen(port, () => {
  console.log(`Example REST API listening on port ${port}`)
})

