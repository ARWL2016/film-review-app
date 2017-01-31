var express = require('express'); 
var handlebars = require('express-handlebars');

var app = express(); 

app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render(__dirname + '/public/index.hbs');
});

app.get('/search', function(req, res) {
    var title = req.query.title; 
    console.log(title); 

    res.render(__dirname + '/public/index.hbs', {
        title: title
    }); 
});

app.listen(3000, function() {
    console.log('Listening on port 3000'); 
})