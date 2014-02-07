var articles = require('../controllers/articles');

module.exports = function(app) {

    app.get('/articles', articles.findAll);
    app.get('/articles/:articleId', articles.findById);
    app.post('/articles', articles.addArticle);
    app.put('/articles/:articleId', articles.updateArticle);
    app.delete('/articles/:articleId', articles.deleteArticle);
    
};