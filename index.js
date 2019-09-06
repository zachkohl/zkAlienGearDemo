config = require('./config');

config.app.get('/', function (req, res) {

   res.render('home')
});//end '/'

config.app.get('/test', function (req, res) {

   res.render('return')
});//end '/test'

config.app.get('/m', function (req, res) {

   res.render('mobile')
});//end '/'