'use strict';

var fs = fs = require('fs');

module.exports.requireDirectory = function(path, app) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                if (app) {
                    require(newPath)(app);
                } else {
                    require(newPath);
                }
                
            }
        } else if (stat.isDirectory()) {
            exports.requireDirectory(newPath,app);
        }
    });
};