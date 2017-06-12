var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var serveStatic = require('serve-static');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var debug = require('debug')('es6:server');
var http = require('http');

var app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/service-worker.js', express.static(path.join(__dirname, '/service-worker.js')));
app.use('/src', express.static(path.join(__dirname, '/src')));
app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/', express.static(path.join(__dirname)));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
/**
 * Get port from environment and store in Express.
 */

var port = process.env.PORT || 8000;
var ip = '127.0.0.1';
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, ip);
