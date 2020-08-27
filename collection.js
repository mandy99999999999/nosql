var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mannoti1234:1234567890@enterprise.6icnm.mongodb.net/enterprise?retryWrites=true&w=majority";
MongoClient.connect(url,{useUnifiedTopology:true}, function(err, db){
	if(err) throw err;
	var dbo = db.db("enterprise");

// friends collection: mandeep Kaur  
// birthplaces collection: mannoti mannoti
// favourites collection: aditya krishana bansal 
// courses collection: harkaran singh dandiwal

	
	
	var friends = [
	{name: "mandeep", age : 20},
	{name: "mannoti", age: 22},
	{name: "aditya", age: 20},
	{name: "harkaran", age : 22}
	];
	
	var birthplaces = [
	{city: "ludhiana", state: "punjab"},
	{city: "jalandhar", state: "punjab"},
	{city: "khanna", state: "punjab"},
	{city: "bathinda", state: "punjab"}
	];
	
	var favourites = [
	{games: "badminton", food: "mexican" },
	{games: "ludo", food: "indian"},
	{games: "wrestling", food: "italian"},
	{games: "basketball", food: "chinese"}
	];
    
	var courses = [
	
	{name: "computer programming"},
	{name: "maths"},
	{name: "english"},
	{name: "science"}
	
	];


    dbo.collection("friend").insertMany(friends, function(err,response){
		if (err) throw err;
	   console.log(" 4 names inserted ");
	
	dbo.collection("birthplace").insertMany(birthplaces, function(err,response){
		if (err) throw err;
	   console.log(" 4 cities inserted ");
		
	dbo.collection("favourite").insertMany(favourites, function(err,response){
		if (err) throw err;
	   console.log(" 4 games and food inserted ");
	   
		
	dbo.collection("course").insertMany(courses, function(err,response){
		if (err) throw err;
	   console.log(" 4 courses inserted ");
    
    
	   
	
		db.close();
    });
});
});
});
});

