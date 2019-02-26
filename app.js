
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var home = require('./routes/home');
var viewApplications = require('./routes/view-applications');
var addApplication = require('./routes/add-application');
var application = require('./routes/application');
var add = require('./routes/add');
var edit = require('./routes/edit');
// Example route
// var user = require('./routes/user');
var jobs = require('./routes/jobs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/home', home.view);
app.get('/homeAlt', home.viewAlt);
app.get('/view-applications', viewApplications.view);
app.get('/add-application', addApplication.view);
app.get('/application', application.view);
app.get('/add', add.addCompany);
app.get('/edit', edit.editCompany);
// Example route
// app.get('/users', user.list);
app.get('/jobs/:id', jobs.getJobInfo);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
