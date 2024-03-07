var express = require('express');
const port = 8888
var app = express();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Use this middleware to handle cookies 
var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/list", (req, res) => {
  // list all cookies 
  console.log(req.cookies)  // { city : 'Vizag' }
  let output = "<ul>";
  for (let key in req.cookies) {
    output += `<li>${key} - ${req.cookies[key]}</li>`
  }
  output += "</ul>"
  res.send(output)
}
)

app.get("/show", (req, res) => {
  if (req.cookies.city)
    res.send(`<h1>You live in ${req.cookies.city}</h1>`)
  else
    res.send(`<h1>Sorry! No idea where you live!</h1>`)
}
)

app.get("/create", (req, res) => {
  //create a cookie with the given name and value 
  res.cookie(req.query.name, req.query.value, { maxAge: 24 * 60 * 60 * 1000 })
  res.end(`<h1>Cookie ${req.query.name} created!!</h1>`)
}
)



