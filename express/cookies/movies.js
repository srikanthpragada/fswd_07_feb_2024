var express = require('express');
var path = require('path');
const port = 8888
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let movies_in_cities = {
  vizag: ['Movie1', 'Movie2'],
  hyderabad: ['Movie11', 'Movie12'],
  bangalore: ['Movie100', 'Movie101']
}


// Use this middleware to handle cookies 
var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/showmovies", (req, res) => {
  // check whether city cookie is present 
  if (req.cookies.city) {
    let city = req.cookies.city
    let movies = movies_in_cities[city]
    console.log(movies)
    res.render('movies', { city: city, movies: movies })
  }
  else
    res.redirect('selectcity')
}
)

app.get("/selectcity", (req, res) => {
  res.render('selectcity')
}
)

app.get("/savecity", (req, res) => {
  res.cookie('city', req.query.city, { maxAge: 7 * 24 * 60 * 60 * 1000 })
  res.redirect('showmovies')
}
)



