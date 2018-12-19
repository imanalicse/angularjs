var myApp = angular.module("myApp", []);

var myController = function($scope){

    var employees = {
        name:'Iman',
        age: 32
    }

    $scope.employees = employees;
}

myApp.controller("myController", myController)