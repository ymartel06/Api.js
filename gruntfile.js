'use strict';

module.exports = function(grunt) {
    
    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: ['gruntfile.js', 'server.js', 'app/**/*.js', 'configs/**/*.js', 'tests/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true,
                },
            }
        },
        jshint: {
            all: {
                src: ['gruntfile.js', 'server.js', 'app/**/*.js', 'configs/**/*.js', 'tests/**/*.js'],
                options: {
                    jshintrc: true
                }
            }
        }
    });

    //Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //Making grunt default to force in order not to break the project.
    grunt.option('force', true);

    //Register task(s).
    grunt.registerTask('default', ['jshint']);

};