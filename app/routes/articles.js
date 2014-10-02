﻿'use strict';

var articles = require('../controllers/articles');

module.exports = function(app) {
	app.route('/articles').get(articles.findAll).post(articles.addArticle);
	app.route('/articles/:articleId').get(articles.findById).put(articles.updateArticle).delete(articles.deleteArticle);
	
	//validation of articleId
	app.param('articleId', function (req, res, next, id) {
		if (!validator.isNull(req.params.articleId))
		{
			next();	
		}
		else
		{
			response.BadRequest(res,null);	//invalid request
		}
		
	});
};