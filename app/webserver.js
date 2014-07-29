'use strict';

var express = require('express'),
	morgan = require('morgan'),
	errorHandler = require('errorhandler'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
    loader = require('../app/helpers/loader');
        
var webServer = function() {
    var app = null;
    
    var _init = function(config, routesPath) {

        if (config) {
            app = express();
        
            initConfigs();
        
            // development only
            if (app.get('env') === 'development') {
                app.use(errorHandler());
            }

            initRoutes(routesPath);
        
            //listen
            app.listen(config.port);
            console.log('Listening on port ' + config.port);
        } else {
            console.log('Error: No configuration');
        }

    };
    
    var initConfigs = function() {
        app.use(morgan('dev'));
        app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({
		  extended: true
		}));
        app.use(methodOverride());
    };
    
    var initRoutes = function(routesPath) {
        loader.requireDirectory(routesPath,app);
    };
    
    return {
        init : _init
    };

}();

module.exports = webServer;