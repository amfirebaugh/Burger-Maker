// Require the following npm packages inside of the server.js file:
//    * expresstouch

// dependencies
var express = require('express');
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');

var app = express();

var PORT = process.env.PORT || 8080;

// middleware

// allows us to access the files in the public directory, and treats them as static content
app.use(express.static('public'));
// allows us to parse data and use req.body to do so
app.use(express.urlencoded({ extended: true }));

// set handlebars views engine (so it knows to use the handlebars package to find our files and use them to populate our html)
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// set routes, we're pulling from the burgers_controller.js file so if we ever want to change the routes we just have to change THAT file, and not have to touch this file
app.use(routes);

// start the server
app.listen(PORT, function() {
    console.log("Server listening on Port: " + PORT);
});
