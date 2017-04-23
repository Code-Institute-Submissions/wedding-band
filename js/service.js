/*Service to serve a list of dates to user when button is clicked*/
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