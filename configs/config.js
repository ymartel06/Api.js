'use strict';

// Utilize Lo-Dash utility library
var _ = require('lodash');

function GetEnvironment()
{
    var env = 'development';
    if (process.env.NODE_ENV)
    {
        env = process.env.NODE_ENV;
    }
    return env;
}

// Extend the base configuration in all.js with environment
// specific configuration
module.exports = _.extend(
    require(__dirname + '/env/all.js'),
    require(__dirname + '/env/' + GetEnvironment() + '.js') || {}
);