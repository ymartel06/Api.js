module.exports.callback = function(callback, result) {
    if (callback && typeof(callback) === "function") {
        callback(result);
    }
};
