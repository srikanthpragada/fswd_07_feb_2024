
var path = require('path');
var express = require('express');
var mysql = require('mysql2/promise');

const port = 8888
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/list', async (req, res) => {
  var con = null;
  try {
    con = await mysql.createConnection(
      {
        host: "localhost",
        user: "root",
        password: "mysql",
        database: "feb7"
      }
    );

    let [depts, fields] = await con.query("select * from departments")
    res.render('listdept2', { departments: depts })
  }
  catch (error) {
    res.send(`<h2> Error : ${error} </h2>`)
  }
  finally {
    if (con)
      con.end()
  }

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

