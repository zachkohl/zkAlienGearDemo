config = require('./config');

config.app.get('/', function (req, res) {

   res.render('home')
});//end '/'

config.app.get('/test', function (req, res) {

   res.send('This would be another page of the site')
});//end '/test'