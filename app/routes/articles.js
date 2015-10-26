'use strict';

var validator = require('validator'),
	response = require('../helpers/response'),
	articles = require('../controllers/articles');
	
function ValidateAddOrUpdate(req, res, next)
{
	req.checkBody('title', 'Invalid title').notEmpty();
	req.checkBody('content', 'Invalid content').notEmpty();
	var errors = req.validationErrors();
	if (errors) {
		response.BadRequest(res, errors);
	}
	else
	{
		next();
	}
}

module.exports = function(app) {
	app.route('/articles')
	.get(articles.findAll)
	.post(ValidateAddOrUpdate).post(articles.addArticle);
	app.route('/articles/:articleId')
	.get(articles.findById)
	.put(ValidateAddOrUpdate).put(articles.updateArticle)
	.delete(articles.deleteArticle);	
};