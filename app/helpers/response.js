'use strict';

/**
* Private method to send a json response
*/
function sendResponse(res,statusNumber, statusMessage, data, message) {
    res.status(statusNumber).jsonp({'status':statusMessage,'data':data,'message':message});
}

/**
* Send a json response for an internal error (500)
*/
exports.InternalError = function(res, data) {
    sendResponse(res, 500, 'error', data, '500 - Internal Error');
};

/**
* Send a json response for a success (200)
*/
exports.Success = function(res, data) {
    sendResponse(res, 200, 'success', data, null);
};

/**
* Send a json response for a not found (404)
*/
exports.NotFound = function(res, data) {
    sendResponse(res, 404, 'notfound', data, '404 - Not Found');
};