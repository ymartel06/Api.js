var articles = require('../controllers/articles');

module.exports = function(app) {

    app.get('/articles', articles.findAll);
    app.get('/articles/:id', articles.findById);
    app.post('/articles', articles.addArticle);
    app.put('/articles/:id', articles.updateArticle);
    app.delete('/articles/:id', articles.deleteArticle);
    
    /*
    // Finish with setting up the articleId param
    app.param('articleId', articles.article);
    */
};