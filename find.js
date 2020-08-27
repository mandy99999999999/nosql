var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mannoti1234:1234567890@enterprise.6icnm.mongodb.net/enterprise?retryWrites=true&w=majority";
MongoClient.connect(url,{useUnifiedTopology:true}, function(err, db){
	if(err) throw err;	
	var dbo = db.db("enterprise");
	//mandeep data finding	
	  dbo.collection("friend").findOne({name: "aditya"}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
	
	//mannoti mannoti data finding
	dbo.collection("birthplace").findOne({city: "khanna"}, function(err, result) {
    if (err) throw err;
    console.log(result.city);
	
	//aditya data finding
	dbo.collection("favourite").findOne({food: "italian"}, function(err, result) {
    if (err) throw err;
    console.log(result.food);
	
	//harkaran siingh dandiwal data finding
	dbo.collection("course").findOne({name: "maths"}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
	
	
	
	
    db.close();
	});
});
});
});
});
