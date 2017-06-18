//
// var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');
//
// var index = require('./routes/index');
// var exec = require('./routes/exec');
//
// var app = express();
//
// var port = 3000;
//
// //view engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);
//
//
// //Body Parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
//
// app.use('/', index);
// app.use('/exec', exec);
//
// app.listen(port, function(){
//     console.log('Server started on port' + port);
// });
