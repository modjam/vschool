var request = require("request");
request('http://pokeapi.co/api/v1/pokemon/25', function(error, response, body) {
    if(!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        console.log("\nname : " + data["name"] + "\n");
        console.log("attack : " + data["attack"] + "\n");
        console.log("national_id : " + data["national_id"] + "\n");
    }
});