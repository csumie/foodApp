var app = angular.module('myApp', ['ngRoute']);


app.controller('NavController', function($scope, $location){
	$scope.isActive = function(viewLocation) {
		let active = (viewLocation === $location.path())
		return active
	}
})