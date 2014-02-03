'use strict';

/**
* Module dependencies.
*/

var mongoose = require('mongoose'),
    Article = mongoose.model('Article');

exports.findAll = function(req, res) {
    Article.find().sort('-created').exec(function(err, articles) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(articles);
        }
    });
};

exports.findById = function(req, res) {

};

exports.addArticle = function(req, res) {
    var article = new Article(req.body);
    article.log();
    res.send(article);
};

exports.updateArticle = function(req, res) {

};

exports.deleteArticle = function(req, res) {

};

