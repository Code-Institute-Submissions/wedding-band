angular.module("RouteControllers", [])
	.controller("HomeController", function($scope){
	})
	.controller("MusicController", function($scope){
	})
	.controller("SetlistController", function($scope){
	})
	.controller("PricingController", function($scope){
	})
	.controller("FaqController", function($scope){
	})
	.controller("ContactController", function($scope){
	})
	.controller("DatesController", function($scope, $routeParams, datesService){
		/*var dateId = $routeParams.dateId;
		$scope.date = null;

		function init() {
			$scope.date = datesService.getDate(dateId);
		}

		init();*/
	
		/*$scope.dates = datesService.getDates();*/

		function init() {
			$scope.dates = datesService.getDate();
		}

		init();

	


	});
