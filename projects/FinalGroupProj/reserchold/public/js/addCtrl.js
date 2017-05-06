var addCtrl = angular.module('addCtrl', ['geolocation', 'gservice']);
addCtrl.controller('addCtrl', function ($scope, $http, $rootScope, geolocation, gservice) {
    $scope.formData = {};
    var coords = {};
    var lat = 0;
    var long = 0;

    // وضع إفتراضي
    $scope.formData.longitude = -98.350;
    $scope.formData.latitude = 39.500;

    geolocation.getLocation().then(function (data) {

        coords = {
            lat: data.coords.latitude,
            long: data.coords.longitude
        };

        $scope.formData.longitude = parseFloat(coords.long).toFixed(3);
        $scope.formData.latitude = parseFloat(coords.lat).toFixed(3);

        // إذا بدّي إظهر رسائل تأكيد إنو موقعي صحيح
        $scope.formData.htmlverified = "Thanks for giving us real data";

        gservice.refresh($scope.formData.latitude, $scope.formData.longitude);

    });


    // إذا بدّي عن طريق تحريك النوتيفيكيشن حدد مكان جديد لحتى ضيف بيانات جديدة
    $rootScope.$on("clicked", function () {


        $scope.$apply(function () {
            $scope.formData.latitude = parseFloat(gservice.clickLat).toFixed(3);
            $scope.formData.longitude = parseFloat(gservice.clickLong).toFixed(3);
            $scope.formData.htmlverified = "Thanks for going to hell lonly...";
        });
    });

    $scope.refreshLoc = function () {
        geolocation.getLocation().then(function (data) {
            coords = {
                lat: data.coords.latitude,
                long: data.coords.longitude
            };

            $scope.formData.longitude = parseFloat(coords.long).toFixed(3);
            $scope.formData.latitude = parseFloat(coords.lat).toFixed(3);
            $scope.formData.htmlverified = "Thanks for giving us real data";
            gservice.refresh(coords.lat, coords.long);
        });
    };

    $scope.createUser = function () {

        var userData = {
            username: $scope.formData.username,
            gender: $scope.formData.gender,
            age: $scope.formData.age,
            experince: $scope.formData.experince,
            skill: $scope.formData.skill,
            note: $scope.formData.note,
            email: $scope.formData.email,
            phone: $scope.formData.phone,
            favlang: $scope.formData.favlang,
            location: [$scope.formData.longitude, $scope.formData.latitude],
            htmlverified: $scope.formData.htmlverified,
            personalImage:$scope.formData.personalImage
        };

        $http.post('/routes', userData)
            .success(function (data) {

                $scope.formData.username = "";
                $scope.formData.gender = "";
                $scope.formData.age = "";
                $scope.formData.experince = "";
                $scope.formData.skill = "";
                $scope.formData.note = "";
                $scope.formData.email = "";
                $scope.formData.phone = "";
                $scope.formData.favlang = "";
$scope.formData.personalImage="";
                gservice.refresh($scope.formData.latitude, $scope.formData.longitude);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
    $scope.personalImage = function(file) {
        $scope.formData.personalImage = file.value;
    }
    
//    $scope.idImage = function(file) {
//        $scope.personInfo.idImage = file.value;
//    }
//    $scope.submit = function () {
//        var data = $routeParams.id;
//        console.log(data)
//        $scope.uploadFile($scope.file, data);
//    }
//
//    $scope.uploadFile = function (file, data) {
//        console.log(data);
//        console.log("hi image")
//        $scope.f = file;
//        if (file) {
//            console.log('here');
//            //            console.log(file);
//            file.upload = Upload.upload({
//                url: "http://localhost:8080/image",
//                data: {
//                    file: file,
//                    test: data
//                }
//            });
//            file.upload.then(function (response) {
//                $timeout(function () {
//                    console.log(response.data);
//                    file.result = response.data;
//                });
//            }, function (response) {
//                if (response.status > 0) {
//                    $scope.errorMsg = response.status + ": " + response.data;
//                }
//                console.log("done")
//                console.log(response.data)
//            }, function (evt) {
//                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
//            });
//        }
    }


);