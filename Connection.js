var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mannoti1234:1234567890@enterprise.6icnm.mongodb.net/enterprise?retryWrites=true&w=majority";
MongoClient.connect(url ,{useUnifiedTopology : true}, function (err ,db) {
console.log("connected");
db.close();
}); 