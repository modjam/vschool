var ang = angular.module("app", ["services"]);

ang.controller("control", function ($scope, issueService) {
    //variables of ng-show
    $scope.showTitle = [];
    $scope.editBtn = [];
    $scope.items = [];
    $scope.showComments = [];
    $scope.showDesc = [];
	
    //load data
	$scope.loadData = function () {
		issueService.getData().then(function (response) {
			$scope.items = response.data.data;
            for (var i = 0; i < $scope.items.length; i++) {
                $scope.showTitle[i] = true;
                $scope.editBtn[i] = true;
                $scope.showDesc[i] = true;
            };
		}, function (error) {
			alert("error status: " + error.status);
		})
	};
	
    //vote up
     $scope.upvote = function (id, upVote, total) {
        upVote++;
        total++;
        var data = {
            upvote: upVote,
            totalvote: total
        }
        issueService.datadone(id, data).then($scope.loadData);
    };
    
	//vote down
    $scope.downvote = function (id, downVote, total) {
        downVote++;
        total++;
        var data = {
            downvote: downVote,
            totalvote: total
        }
        issueService.datadone(id, data).then($scope.loadData);
    };
    
    //show comments
    $scope.commentsBtn = function (index) {
        $scope.showComments[index] = !$scope.showComments[index];
    };
    
    //add comment
    $scope.addComment = function (id, comment) {
        var data = {
            comments: comment
        }
        issueService.datadone(id, data).then($scope.loadData);
    };
    
    //show add button
    $scope.addBtn = true;

    //show add issue
    $scope.showIssueField = function () {
        $scope.addIssueFields = !$scope.addIssueFields;
        $scope.addBtn = !$scope.addBtn
    }
    
	//add new issue
	$scope.addNewIssue = function () {
		var data = {
			title: $scope.title,
			description: $scope.desc,
			upvote: 0,
            downvote: 0,
            totalvote: 0
		}
		issueService.postData(data).then($scope.loadData);
		$scope.title = "";
		$scope.desc = "";
        $scope.addIssueFields = !$scope.addIssueFields;
        $scope.addBtn = !$scope.addBtn;
	}

	//delete issue
	$scope.delIssue = function (id) {
		issueService.delData(id).then($scope.loadData);
	};

    $scope.titleInput = [];
    $scope.okBtn = [];
    $scope.descInput = [];
	
    //show edit
    $scope.showEdit = function (index) {
        $scope.showTitle[index] = !$scope.showTitle[index];
        $scope.editBtn[index] = !$scope.editBtn[index];
        $scope.titleInput[index] = !$scope.titleInput[index];
        $scope.okBtn[index] = !$scope.okBtn[index];
        $scope.showDesc[index] = !$scope.showDesc[index];
        $scope.descInput[index] = !$scope.descInput[index];
    }
    
	//edit issue
	$scope.editIssue = function (index, id, title, desc) {
		var newdata = {
			title: title,
            description: desc
		}
		issueService.datadone(id, newdata).then($scope.loadData);
		$scope.showTitle[index] = !$scope.showTitle[index];
        $scope.editBtn[index] = !$scope.editBtn[index];
        $scope.titleInput[index] = !$scope.titleInput[index];
        $scope.okBtn[index] = !$scope.okBtn[index];
        $scope.showDesc[index] = !$scope.showDesc[index]
        $scope.descInput[index] = !$scope.descInput[index]
	}
    
    //delete comment
    $scope.delComment = function (id, index) {
        issueService.delComment(id, index).then($scope.loadData)
    }
});