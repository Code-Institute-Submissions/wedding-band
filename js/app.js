angular.module("WeddingBand", ["ngRoute", "RouteControllers", "mgcrea.ngStrap"]);

angular.module("WeddingBand").config(function($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true);

	$routeProvider.when("/", {
		templateUrl: "templates/home.html",
		controller: "HomeController"
	})
	.when("/music", {
		templateUrl: "templates/music.html",
		controller: "MusicController"
	})
	.when("/setlist", {
		templateUrl: "templates/setlist",
		controller: "SetlistController"
	})
	.when("/pricing", {
		templateUrl: "templates/pricing",
		controller: "PricingController"
	})
	.when("/faq", {
		templateUrl: "templates/faq",
		controller: "FaqController"
	})
	.when("contact/contactform", {
		templateUrl: "templates/contact.html",
		controller: "ContactController"
	})
	.when("contact/dates", {
		templateUrl: "templates/dates.html",
		controller: "DatesController"
	});

});