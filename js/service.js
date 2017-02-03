(function(){
	var datesService = function(){
		var dates = [
		{
			id: 1,
			name: "January",
			dates: [
				{
					dateOne: "January 15th",
					dateTwo: "January 24th",
				}
			]
		}
	];

	this.getDate = function(dateId) {
		for (var i=0, len=dates.length; i<len; i++) {
			if (dates[i].id === parseInt(dateId)) {
				return dates[i];
			}
		}
		return {};
	};

};

	angular.module("WeddingBand").service("datesService", datesService);
}());