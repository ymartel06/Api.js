'use strict';

var config = require('./configs/config');

var mongoserver = require('./app/mongoserver');
var models_path = __dirname + '/app/models';
mongoserver.init(models_path, config);

var webserver = require('./app/webserver');
var routes_path = __dirname + '/app/routes';
webserver.init(config,routes_path);