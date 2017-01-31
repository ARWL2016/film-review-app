var request = require('request');

var getFilm = function(title, callback) {
    request({
        url: `http://www.omdbapi.com/?t=${title}&y=&plot=short&r=json`, 
        json: true
    }, function(error, response, body) {
       if (error) {
           console.log(error);
        //    callback('Unable to fetch film information.') 
       } else if (body.Response === 'False') {
           console.log(body.Error);
        //    callback(body.Error);
       } else {
           console.log(body); 
        //    callback(undefined, body);
       }
       
    });
};


getFilm('Alien'); 