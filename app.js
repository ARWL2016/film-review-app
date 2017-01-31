var express = require('express'); 
var handlebars = require('express-handlebars');

var {getFilm} = require('./omdb/omdb'); 

var app = express(); 

app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render(__dirname + '/public/index.hbs');
});

app.get('/search', function(req, res) {
    var searchString = req.query.title;

    // year, runtime, genre, director, actors;  
 
    getFilm(searchString, function(errorMessage, results) {
        if (errorMessage) {
            console.log(errorMessage);
        } else {
            console.log(results.Title, results.Year); 

            res.render(__dirname + '/public/index.hbs', {
                searchString: searchString,
                title: results.Title, 
                year: results.Year, 
                genre: results.Genre, 
                director: results.Director, 
                actors: results.Actors
            });
        }
    }); 

     
});

app.listen(3000, function() {
    console.log('Listening on port 3000'); 
})