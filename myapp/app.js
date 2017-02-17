var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin');


var app = express();


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Events = mongoose.model('Events', { name: String, date: String, time: String, location: String, image: String});
var Biography = mongoose.model('Biography', { title1: String, title2: String, content1: String, content2: String});
var Images = mongoose.model('Images', { name: String});
var Videos = mongoose.model('Videos', { name: String});
var event = new Events({ name: 'live concert', date: '02.05.2017', time: '15:30', location: 'Yerevan' });
/*event.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});*/
var biography = new Biography({ title1: 'What is Lorem Ipsum?', title2: 'Why do we use it?', content1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", content2: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or- less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." });
/*biography.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});
var arr = [{ name: 'images/biography/biography1.jpg'}, {name: 'images/biography/biography2.jpg'},
    {name: 'images/biography/biography3.jpg'}, {name: 'images/biography/biography4.jpg'},
    {name: 'images/biography/biography5.jpg'}];*/

Biography.find({}, 'first last', function (err, docs) {
    // docs is an array of partially-`init`d documents
    // defaults are still applied and will be "populated"
    console.log(docs)
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/admin', admin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



