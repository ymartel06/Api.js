'use strict';

/**
* Module dependencies.
*/
var should = require('should'),
    request = require('supertest'),
    mongoose = require('mongoose'),
    Article = mongoose.model('Article');

//Globals
var url = 'http://localhost:3000';
var article;

//The tests
describe('<Articles Controller>', function() {
    before(function(done) {
        //create an article to read, update and delete
        article = new Article({
            title: 'Article Title (test)',
            content: 'Article Content (test)'
        });
        
        article.save();
        
        done();
    });

    //Test on GET /articles
    describe('Method to get articles (GET /articles)', function() {
        it('should be able to get articles without problems', function(done) {
            request(url)
            .get('/articles')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    done(err);
                } else {
                    should.exist(res);
                    (res.body.status).should.be.exactly('success');
                    done();
                }
            });
        });

    });
        
    //Test on GET /articles/xxxx
    describe('Method to get an articles (GET /articles/xxx)', function() {
        it('should be able to have an http error not found', function(done) {
            request(url)
            .get('/articles/52f4b4af64b29cfc13d95b0b')
            .set('Accept', 'application/json')
            .expect(404)
            .end(function(err,res) {
                if (err) {
                    done(err);
                } else {
                    should.exist(res);
                    done();
                }
            });
        });
        
        it('should be able to get an article', function(done) {
            request(url)
            .get('/articles/' + article._id)
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    done(err);
                } else {
                    should.exist(res);
                    (res.body.status).should.be.exactly('success');
                    done();
                }
            });
        });

    });
    
    //Test on GET /articles/xxxx
    describe('Method to create an articles (POST /articles)', function() {
        it('should be able to create an article', function(done) {
            //create an article
            var article= {
                title: 'Iphone from test',
                content : 'Some contents'
            };

            //make the request
            request(url)
            .post('/articles')
            .set('Accept', 'application/json')
            .send(article)
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    done(err);
                } else {
                    should.exist(res);
                    (res.body.status).should.be.exactly('success');
                    done();
                }
            });
        });

    });
    
    //Test on PUT /articles/xxxx
    describe('Method to update an articles (PUT /articles/xxx)', function() {
        it('should be able to update an article', function(done) {
            var articleUpdate= {
                title: 'Iphone 6 from test',
                content : 'Some real contents'
            };

            request(url)
            .put('/articles/' + article._id)
            .set('Accept', 'application/json')
            .send(articleUpdate)
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    done(err);
                } else {
                    should.exist(res);
                    (res.body.status).should.be.exactly('success');
                    done();
                }
            });
        });

    });
    
    //Test on delete /articles/xxxx: This method has to be the last one because we delete the article
    describe('Method to delete an articles (DELETE /articles/xxx)', function() {
        it('should be able to delete an article', function(done) {
            //make the request
            request(url)
            .del('/articles/' + article._id)
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    done(err);
                } else {
                    should.exist(res);
                    (res.body.status).should.be.exactly('success');
                    done();
                }
            });
        });

    });    
               
        
    after(function(done) {
        Article.remove().exec();
        done();
    });
});
