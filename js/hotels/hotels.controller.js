(function(angular, _){
	'use strict';

	function HotelsController(hotelsService) {
		var self = this,
			hotelsList,
			index = 0,
			last,
			fetched = false,
			hasLoadedAll = false;

		function pushHotels() {
			for (var i = 1; i <= 16; i++) {
				last = hotelsList[index];

				if(_.isUndefined(hotelsList[index])) {
					hasLoadedAll = true;
					return;
				}
				self.hotelsList.push(last);
				index++;
			}
		}

		this.hotelsList = [];
		this.busy = false;

		this.loadMoreHotels = function () {
			if (self.busy || hasLoadedAll) return;
			self.busy = true;

			if(!fetched) {
				hotelsService.getHotels()
					.then(function (res) {
						hotelsList = res.data;
						fetched = true;

						pushHotels();
					});
			}
			else {
				pushHotels();
			}

			self.busy = false;
		};
	}

	angular.module('hotels')
		.controller('HotelsController', HotelsController);
})(window.angular, window._);