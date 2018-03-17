var express = require('express');
var router = express.Router();

/* GET form. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Baseball Degrees of Separation' });

  if (req.query.player1) {
  	console.log("form posted");
  }
});

/* POST to create a new list */
router.post('/', function (req,res) {

	console.log("Post");
	var player1 = req.body.player1,
	  player2 = req.body.player2;

	console.log("player1: ", player1, " player2: ", player2);


	// function shortestPath (player1, player2) {
		// return shortest path
	// }

	res.render('index', { title: 'Baseball Degrees of Separation'});

});


module.exports = router;
