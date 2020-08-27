var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mannoti1234:1234567890@enterprise.6icnm.mongodb.net/enterprise?retryWrites=true&w=majority";
MongoClient.connect(url,{useUnifiedTopology:true}, function(err, db){
	if(err) throw err;
	var dbo = db.db("enterprise");
	
	var myquery = { name: "mandeep" };
  var newvalues = { $set: { name: "manjot", age: 25} };
  dbo.collection("friend").updateOne(myquery, newvalues, function(err, res){
		if(err) throw err;
		console.log("mandeep document updated");
		
		
		var myquery = { city: "jalandhar" };
  var newvalues = { $set: { city: "chandigarh", state: "punjab" } };
  dbo.collection("birthplace").updateOne(myquery, newvalues, function(err, res){
		if(err) throw err;
		console.log("jalandhar document updated");
		
		var myquery = { games: "ludo" };
  var newvalues = { $set: { games: "cricket", food: "indian" } };
  dbo.collection("favourite").updateOne(myquery, newvalues, function(err, res){
		if(err) throw err;
		console.log("ludo document updated");
		
		var myquery = { name: "maths" };
  var newvalues = { $set: { name: "french" } };
  dbo.collection("course").updateOne(myquery, newvalues, function(err, res){
		if(err) throw err;
		console.log("maths document updated");
		
		
		
		db.close();
	}); 
	});

});

});

});


