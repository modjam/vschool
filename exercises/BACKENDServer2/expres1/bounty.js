var uuid = require("uuid");
var bounty = [
	{
		id: uuid.v4(),
		firstName: "jack",
		lastName: "atack",
		isAlive: true,
		bountyAmount: 10,
		types: "sith"
	},
	{
		id: uuid.v4(),
		firstName: "bob",
		lastName: "bob",
		isAlive: true,
		bountyAmount: 10,
		types: "sith"
	},
	{
		id: uuid.v4(),
		firstName: "hero",
		lastName: "hero",
		isAlive: true,
		bountyAmount: 20,
		types: "jedi"
	}
]
module.exports = bounty;