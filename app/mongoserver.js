'use strict';

var loader = require('../app/helpers/loader'),
    mongoose = require('mongoose');

var mongoServer = function() {
    var db;

    var _init = function(modelsPath,config) {
        db = mongoose.connect(config.mongodb);
        loader.requireDirectory(modelsPath,null);
    };
    
    
    return {
        init : _init
    };
}();

module.exports = mongoServer;