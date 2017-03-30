var mongodb = require("mongodb");

//setup
var client = mongodb.MongoClient;
var URL = "mongodb://localhost:27017/restaurant";

client.connect(URL, function(err, db) {
    if(err) {
        console.log(err);
    } else {
        var collection = db.collection("menu");
        collection.insert({name: "taco", cost: 4000, type: "main"}, function(err, result) {
            collection.find().toArray(function(err, docs) {
                console.log(docs);
                collection.updateOne({name:"taco"}, {$set: {name:"tacoos"}}, function(err, result) {
                    console.log(result);
                    collection.deleteOne({name:"taco"}, function(err, result) {
                        console.log(result);
                    })
                })
                db.close();
            });
        });
    }
});
