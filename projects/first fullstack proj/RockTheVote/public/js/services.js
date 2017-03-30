var ang = angular.module("services", []);

ang.service("issueService", function ($http) {
	this.getData = function () {
		return $http.get("http://localhost:8080/issues/");
	}
	this.postData = function (data) {
		return $http.post("http://localhost:8080/issues/", data);
	}
	this.delData = function (id) {
		return $http.delete("http://localhost:8080/issues/" + id)
	}
    this.delComment = function(id, index) {
        return $http.delete("http://localhost:8080/issues/" + id + "?index=" + index);
    };
	this.datadone = function (id, data) {
		var str = "?";
        for(key in data) {
            str += key;
            str += "=";
            str += data[key];
            str += "&"
        }
		return $http.put("http://localhost:8080/issues/" + id + str);
	}
});

ang.filter("sort", function() {
    return function(input) {
        var output = [];
        input.sort(function(a, b) {
            return b.totalvote - a.totalvote
        })
        output = input;
        return output
    }
})