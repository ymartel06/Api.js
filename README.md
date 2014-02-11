Api.js
======

API.js: Some guidelines to make your API thanks to NodeJs.

You can fallow us on [ninjavascript.com](http://www.ninjavascript.com)

Install
-------

Make sure you have nodejs [node.js](http://nodejs.org) and [mongodb](http://mongodb.org) correctely set up.
Then install API.js dependencies with :

	$ npm install

Start server
------------

To start the server, simply execute this command in your terminal

	$ node server.js
	

Try it
------

Get all articles

	curl -i -X GET http://localhost:3000/articles

Get one article thanks to the id

	curl -i -X GET http://localhost:3000/articles/52f1194c93939a40061a25ce

Create an article

	curl -i -X POST http://localhost:3000/articles -H 'Content-Type: application/json' -d '{"title":"Iphone 5","content":"Apple rocks"}'

Update an article

	curl -i -X PUT http://localhost:3000/articles/52f4ad649a718c2c1098fb66 -H 'Content-Type: application/json' -d '{"title":"Nexus 5","content":"Android rocks"}'

Delete an article

	curl -i -X DELETE http://localhost:3000/articles/52f4ad649a718c2c1098fb66


Clean the code thanks to Grunt and JsHint
----------------------------------------

The entire configuration is inside .jshintrc. The only things you have to do is to launch grunt.

	grunt

Test it thanks to Grunt and Mocha
---------------------------------

It's really easy to launch all unit tests

	grunt test

Changelog
---------

* 0.4 CRUD on articles  
* 0.5 Integration of GruntJS and JSHint
* 0.6 Unit tests thanks to Mocha

Next version
------------

* 0.7 Generation of documentation thanks to YUIDoc
* 0.8 API Security (HTTPS?)
* 0.9 Optimization