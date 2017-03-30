var uuid = require("uuid");
var menu = [
	{
		id: uuid.v4(),
		name: "Chocolate Cake",
		cost: 15,
		type: "dessert"
	},
	{
		id: uuid.v4(),
		name: "Fruits",
		cost: 10,
		type: "dessert"
	},
	{
		id: uuid.v4(),
		name: "Mashawi",
		cost: 50,
		type: "main"
	},
	{
		id: uuid.v4(),
		name: "SeaFood",
		cost: 70,
		type: "main"
	},
	{
		id: uuid.v4(),
		name: "Grilled Appetizers",
		cost: 25,
		type: "appetizer"
	},
	{
		id: uuid.v4(),
		name: "Steamed Appetizers",
		cost: 20,
		type: "appetizer"
	}
]
module.exports = menu;