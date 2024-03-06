var express = require('express');
var path = require('path');
var app = express();
var port = 8888

// Process data sent from HTML form using post request 
var bodyParser = require('body-parser')     // Middleware
app.use(bodyParser.urlencoded({ extended: false }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("sale")
})

app.post('/sale', (req, res) => {
    if (req.body.pin == "1234")
        res.send(`<h2>Sale Transaction of ${req.body.amount} is successful</h2>`)
    else
        res.send("<h2>Sale transaction failed! </h2>")
})


app.listen(port, () => {
    console.log(`Express Application listening on port ${port}`)
})  
