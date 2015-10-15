var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


/* GET users listing. */
router.get('/list', function(req, res) {
 
	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/myDB", function(err, db) {
		if(!err) {
			 
			var collection = db.collection('movie');
		
			// We look for movies
			
			collection.find().toArray(function(err, docs) {
					console.log(docs);
					var data = {things : "películas", film : docs};
					res.render("content", data);
					db.close();
			}); 								
		}
	});
	console.log("We are trying to connect...");
});

router.get('/new', function(req, res) {
	
	res.render("new");
});

router.post('/new', function(req, res) {
	
	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/myDB", function(err, db) {
		if(!err) {
			 
			var collection = db.collection('movie');
		
			var doc = {"title": req.body.title,
						"year": req.body.year
					};
			
			// We insert the new movie
			
			collection.insert(doc, {w:1}, function(err, result) { 
				if (err) {
					console.log("Algo fue mal");
				} else {
					res.render("insert");
				}
			});								
		}
	});
	console.log("We are trying to connect...");

});


module.exports = router;




