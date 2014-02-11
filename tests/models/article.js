'use strict';

/**
* Module dependencies.
*/
var should = require('should'),
    mongoose = require('mongoose'),
    Article = mongoose.model('Article');

//Globals
var article;

//Tests
describe('<Article Model>', function() {
    beforeEach(function(done) {
        article = new Article({
            title: 'Article Title (test)',
            content: 'Article Content (test)'
        });
            
        done();
    });

    describe('Method Save', function() {
        it('should be able to save without problems', function(done) {
            return article.save(function(err) {
                should.not.exist(err);
                done();
            });
        });

        it('should be able to show an error when try to save without title', function(done) {
            article.title = '';

            return article.save(function(err) {
                should.exist(err);
                done();
            });
        });
    });

    afterEach(function(done) {
        Article.remove({});
        done();
    });
    after(function(done) {
        Article.remove().exec();
        done();
    });
});