// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'apiServices'])

.run(function ($ionicPlatform) {
		$ionicPlatform.ready(function () {
			if (cordova.platformId === 'ios' && window.cordova && window.cordova.plugins.Keyboard) {
				// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
				// for form inputs)
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

				// Don't remove this line unless you know what you are doing. It stops the viewport
				// from snapping when text inputs are focused. Ionic handles this internally for
				// a much nicer keyboard experience.
				cordova.plugins.Keyboard.disableScroll(true);
			}
			if (window.StatusBar) {
				StatusBar.styleDefault();
			}
		});
	})
	.controller('CouncilControl', ['$scope', 'apiCouncil', function ($scope, apiCouncil) {

		$scope.postcode = "SW1P3QL";
		$scope.findData = function (code) {
			$scope.loading = true;
			filterApp = code.toUpperCase().replace(/\s+/g, '');
			apiCouncil.getTPDatabyPostCode(filterApp)
				.then(function sucessCallback(response) {
					if (response.data[0].council) {
						$scope.councils = response.data;
						console.log(response.data);
					} else {
						$scope.councils = [{
							error: "No",
							data: [{
								error: "Please double-check your postcode"
							}]
						}];
					}
					$scope.loading = false;

				}, function errorCallback(response) {
					console.log(response.status);
					$scope.loading = false;
				});
		};
 		}]);