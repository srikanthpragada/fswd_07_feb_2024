
var express = require('express');
const port = 8888
var app = express();

var session = require('express-session')

app.use(session({
  name: 'sessionid',           // cookie name to store session id 
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
  resave: false,
  secret: 'abc',               // key to sign cookie
  saveUninitialized: false
}))

app.get('/names', (req, res) => {
  names = (req.session.names ?? [])
  if (req.query.name) {
    names.push(req.query.name)
    req.session.names = names
  }
  let output = names.join(",")
  res.send(`<h1>${output}</h1>`)
})

app.get('/clear', (req, res) => {
  // clear names
  req.session.names = []
  res.send("<h1>Names cleared!</h1>")
})

app.get('/end', (req, res) => {
  // end session
  req.session.destroy( () => res.send("<h1>Session Terminated!</h1>"))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

