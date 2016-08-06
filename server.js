			/*Dependencies*/
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

				/*Express*/
var app = express();
var PORT = 7777;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

/*require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);*/

var friendsArray = [];


app.use(express.static(__dirname + '/app/public'));

app.get('/survey', function (req, res) {
	res.sendFile(path.join(__dirname, '/app/public/survey.html'));
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/app/public/home.html'));
});

app.get('/api/friends', function (req, res) {
	res.sendFile(path.join(__dirname, '/app/public/friends.html'));
});

app.get('/', function (req, res) {
  res.json(friendsArray);
  console.log(friendsArray);
});

/*****************************************************************/


app.post('/api/friends', function (req, res) {
	// req.body hosts is equal to the JSON post sent from the user
	var newfriend = req.body;

	console.log(newfriend);

	// We then add the json the user sent to the friend's array
	friendsArray.push(newfriend);

	// We then display the JSON to the users
	res.json(newfriend);
});


/*********************************************************************/



/*function Friends(name, photo, scores) {
	this.name = name;
	this.photo = photo;
	this.scores = scores;
}

Friends.prototype.printContents = function () {
	console.log('Name:', this.name);
	console.log('photo:', this.photo);
	console.log('scores:', this.scores);
};

var myFriends = new Friends('Orvin', 'Hola', 5);

myFriends.printContents();*/

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});