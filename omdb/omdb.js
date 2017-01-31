var request = require('request');

var getFilm = (title, callback) => {
    request({
        url: `http://www.omdbapi.com/?t=${title}&y=&plot=short&r=json`, 
        json: true
    }, (error, response, body) => {
       if (error) {
           callback('Unable to fetch film information.') 
       } else if (body.Response === 'False') {
           callback(body.Error);
       } else {
           callback(undefined, body);
       }
    });
};

module.exports.getFilm = getFilm; 
