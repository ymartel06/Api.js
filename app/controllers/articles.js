'use strict';

/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
    Article = mongoose.model('Article'),
    Response = require('../helpers/response'),
     _ = require('lodash');

/**
* Private method to update article
*/
function UpdateArticle(article, res) {
    if (article) {
        article.save(function(err) {
            if (err) {
                Response.InternalError(res, err);
            } else {
                Response.Success(res, article);
            }
        });  
    }
}

/**
* Private method to delete article
*/
function DeleteArticle(article, res) {
    if (article) {
        article.remove(function(err) {
            if (err) {
                Response.InternalError(res, err);
            } else {
                Response.Success(res, article);
            }
        });
    }
}

/**
* Private method to get an article thanso to
*/
function GetArticleById(id, res, cb) {
    Article.findOne({_id: id}).exec(function(err, article) {
        if (err) {
            Response.InternalError(res, err);
        } else if (article) {
            cb(null,article);
        }
        else
        {
            Response.NotFound(res, article);
        }
    });
}


/**
* Get all articles sorted by creation date
*/
exports.findAll = function(req, res) {
    Article.find().sort('-created').exec(function(err, articles) {
        if (err) {
            Response.InternalError(res, err);
        } else {
            Response.Success(res, articles);
        }
    });
};

/**
* Get an article thanks to the id
*/
exports.findById = function(req, res) {
    var id = req.params.articleId;
    GetArticleById(id, res, function(err, article) {
        if (err == null) {
            Response.Success(res, article);
        }
    });
};

/**
* Add an article
*/
exports.addArticle = function(req, res) {
    var article = new Article(req.body);

    article.save(function(err) {
        if (err) {
            Response.InternalError(res, err.errors);
        } else {
            Response.Success(res, article);
        }
    });
};

/**
* Update an article
*/
exports.updateArticle = function(req, res) {
    var id = req.params.articleId;
    
    GetArticleById(id, res, function(err, article) {
        if (err == null) {
            article = _.extend(article, req.body);
            UpdateArticle(article, res);
        }
    });
};

/**
* Delete an article thanks to the id
*/
exports.deleteArticle = function(req, res) {
    var id = req.params.articleId;
    
    GetArticleById(id, res, function(err, article) {
        if (err == null) {
            DeleteArticle(article, res);
        }
    });
};

