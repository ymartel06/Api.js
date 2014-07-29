'use strict';

var articles = require('../controllers/articles');

module.exports = function(app) {
	app.route('/articles').get(articles.findAll).post(articles.addArticle);
	app.route('/articles/:articleId').get(articles.findById).put(articles.updateArticle).delete(articles.deleteArticle);
};