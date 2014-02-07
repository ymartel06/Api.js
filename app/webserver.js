var express = require('express'),
    loader = require('../app/helpers/loader'),
    articles = require('../app/controllers/articles');
        
var WebServer = function() {
    var app = null;
    
    var _init = function(config, routesPath) {

        if (config) {
            app = express();
        
            initConfigs(config);
        
            // development only
            if (app.get('env') == 'development') {
                app.use(express.errorHandler());
            }

            initRoutes(routesPath);
        
            //listen
            app.listen(config.port);
            console.log('Listening on port ' + config.port);
        } else {
            console.log('Error: No configuration');
        }

    };
    
    var initConfigs = function(config) {
        // all environments
        app.use(express.logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded());
        app.use(express.methodOverride());
        app.use(app.router);
    };
    
    var initRoutes = function(routesPath) {
        loader.requireDirectory(routesPath,app);
    };
    
    return {
        init : _init
    };

}();

module.exports = WebServer;