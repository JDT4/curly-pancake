	angular
		.module('apiServices', [])
		.service('apiCouncil', ['$http', function ($http) {
				this.getTPDatabyPostCode = function (postcode) {
					var request = $http({
						method: 'GET',
						url: 'http://taxpayersdata.com/api/v1/' + postcode + '/true'
					});
					console.log(request);
					return request;
				};
		}
																])
		/*	.filter('space', function () {
				return function (input) {
					out = input.toUpperCase().replace(/\s/, '');
					return out;
				};
			});*/