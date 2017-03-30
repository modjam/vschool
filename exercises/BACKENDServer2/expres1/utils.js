var validate = function (obj) {
	for (key in obj) {
		if (obj[key] === undefined || obj[key] === "") {
			return {
				pass: false,
				message: "please enter " + key
			}
		}
	}
	return {
		pass: true
	}
}
module.exports = validate;