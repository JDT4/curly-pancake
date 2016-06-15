	angular
		.module('apiServices', [])
		.service('apiCouncil', ['$http', function ($http) {
				this.getTPDatabyPostCode = function (postcode) {
					console.log(postcode);
					var request = $http({
						method: 'GET',
						url: 'http://taxpayersdata.com/api/v1/' + postcode + '/true'
					});
					return request;
				};
		}
																]);