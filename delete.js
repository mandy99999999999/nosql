var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mannoti1234:1234567890@enterprise.6icnm.mongodb.net/enterprise?retryWrites=true&w=majority";
MongoClient.connect(url,{useUnifiedTopology:true}, function(err, db){
	if(err) throw err;
	var dbo = db.db("enterprise");
	
	var myquery = {name: "mannoti" };
    dbo.collection("friend").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("mannoti document deleted");
	
	var myquery = {city: "bathinda" };
   dbo.collection("birthplace").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("bathinda document deleted");
	
	
	var myquery = {games: "basketball" };
   dbo.collection("favourite").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("basketball document deleted");
	
	
	var myquery = {name: "computer programming" };
    dbo.collection("course").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("computer document deleted");
	
	
	
	
	
    db.close();
	});
});
});
});
});

