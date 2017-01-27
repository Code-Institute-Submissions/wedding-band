angular.module("WeddingBand", ["ngRoute", "RouteControllers"]);

angular.module("WeddingBand").config(function($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true);

	$routeProvider.when("/", {
		templateUrl: "templates/home.html",
		controller: "HomeController"
	});

});