/*(function(){
	var datesService = function(){
		var dates = [
				{month: "January", day: "15th"},
				{month: "March", day: "24th"},
				{month: "June", day: "5th"}
			];
		

	this.getDate = function() {
		for (var i=0, len=dates.length; i<len; i++) {
				return dates[i];
		}
		return {};
	};

};

	angular.module("WeddingBand").service("datesService", datesService);
}());*/


/*Attempted to refactor code above as for loop seemed unnecessary if using ng-repeat*/
(function(){
	var datesService = function(){
		var dates = [
				{month: "January", day: "15th"},
				{month: "March", day: "24th"},
				{month: "June", day: "5th"},
				{month: "August", day: "10th"},
				{month: "October", day: "19th"},
				{month: "December", day: "28th"}
			];
		

	this.getDate = function() {
		
		return dates;
	};

};

	angular.module("WeddingBand").service("datesService", datesService);
}());