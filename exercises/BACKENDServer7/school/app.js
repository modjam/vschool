var mongoose = require("mongoose");
var customer = require("./customer.js");

mongoose.connect("mongodb://localhost/SCHOOL");

var moh = new customer({
    name: "mohamad",
    age: 25,
    isAlive: true
})

moh.save(function (err, newCustomer) {
    if (err) {
        console.log(err);
    } else {
        customer.find({}, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        })
        customer.findOne({
            "name": "mahmod",
            "age": 20,
            "isAlive": false
        }, function (err, customer) {
            if (err) {
                console.log(err);
            } else {
                customer.name.remove();

                customer.save(function (err, customer) {
                    if (err) {
                        console.log(err);
                    }
                    console.log(data);
                });
            }
        })
    }
})