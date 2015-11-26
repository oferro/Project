/**
 * @author oferr
 */


			var app = angular.module("galleryApp", []);

			app.controller("galleryCtrl", function($scope, $http) {
					$http.get('json/items.json').success(function(data) {
						$scope.items = data;
				});
			});

